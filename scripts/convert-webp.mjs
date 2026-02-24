import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS_DIR = path.resolve(__dirname, '../src/assets/new images');

async function processDirectory() {
    console.log(`Scanning directory: ${ASSETS_DIR}`);

    try {
        const files = await fs.readdir(ASSETS_DIR);
        let convertedCount = 0;
        let totalSavedBytes = 0;

        for (const file of files) {
            if (file.toLowerCase().endsWith('.png') || file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')) {
                const filePath = path.join(ASSETS_DIR, file);
                const fileExt = path.extname(file);
                const fileNameNoExt = path.basename(file, fileExt);
                const destPath = path.join(ASSETS_DIR, `${fileNameNoExt}.webp`);

                console.log(`Processing: ${file}`);

                try {
                    const statsBefore = await fs.stat(filePath);

                    await sharp(filePath)
                        .webp({ quality: 80, effort: 6 }) // high effort compression
                        .toFile(destPath);

                    const statsAfter = await fs.stat(destPath);
                    const savedBytes = statsBefore.size - statsAfter.size;
                    const savedPercentage = ((savedBytes / statsBefore.size) * 100).toFixed(1);

                    console.log(`✅ Converted ${file} -> ${fileNameNoExt}.webp`);
                    console.log(`   Size reduced by ${savedPercentage}% (${(savedBytes / 1024 / 1024).toFixed(2)} MB saved)`);

                    totalSavedBytes += savedBytes;
                    convertedCount++;

                    // Optionally, delete the original
                    // await fs.unlink(filePath);
                } catch (err) {
                    console.error(`❌ Failed to process ${file}:`, err);
                }
            }
        }

        console.log('\n--- Summary ---');
        console.log(`Files converted: ${convertedCount}`);
        console.log(`Total space saved: ${(totalSavedBytes / 1024 / 1024).toFixed(2)} MB`);

    } catch (err) {
        console.error('Error reading directory:', err);
    }
}

processDirectory();
