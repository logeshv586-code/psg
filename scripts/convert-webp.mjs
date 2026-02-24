import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ASSETS_ROOT = path.resolve(__dirname, '../src/assets');

let convertedCount = 0;
let totalSavedBytes = 0;

async function processDirectory(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            await processDirectory(fullPath);
        } else {
            const ext = path.extname(entry.name).toLowerCase();
            if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
                const fileNameNoExt = path.basename(entry.name, ext);
                const destPath = path.join(dir, `${fileNameNoExt}.webp`);

                console.log(`Processing: ${fullPath}`);
                try {
                    const statsBefore = await fs.stat(fullPath);
                    await sharp(fullPath)
                        .webp({ quality: 80, effort: 6 })
                        .toFile(destPath);

                    const statsAfter = await fs.stat(destPath);
                    const savedBytes = statsBefore.size - statsAfter.size;
                    totalSavedBytes += savedBytes;
                    convertedCount++;

                    await fs.unlink(fullPath); // Delete the original to avoid duplicates in glob imports
                    console.log(`✅ Converted ${entry.name}`);
                } catch (err) {
                    console.error(`❌ Failed to process ${entry.name}:`, err);
                }
            }
        }
    }
}

async function main() {
    console.log(`Scanning recursively starting at: ${ASSETS_ROOT}`);
    await processDirectory(ASSETS_ROOT);

    console.log('\n--- Summary ---');
    console.log(`Files converted: ${convertedCount}`);
    console.log(`Total space saved: ${(totalSavedBytes / 1024 / 1024).toFixed(2)} MB`);
}

main().catch(console.error);
