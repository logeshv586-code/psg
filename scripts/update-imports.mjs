import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const SRC_DIR = path.resolve(__dirname, '../src');

async function processDirectory(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            await processDirectory(fullPath);
        } else if (entry.isFile() && (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx'))) {
            let content = await fs.readFile(fullPath, 'utf8');

            // We know images were converted to webp
            // We look for imports from '.../assets/new images/...' that end in .png, .jpg, .jpeg

            const regex = /(from\s+["'].*?assets\/new images\/.*?\.)(png|jpg|jpeg)(["'])/gi;

            if (regex.test(content)) {
                console.log(`Updating imports in: ${fullPath}`);
                const newContent = content.replace(regex, '$1webp$3');
                await fs.writeFile(fullPath, newContent, 'utf8');
            }
        }
    }
}

async function main() {
    console.log('Starting import updates...');
    await processDirectory(SRC_DIR);
    console.log('Import updates complete.');
}

main();
