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

            // Match from statements and string literals for png, jpg, jpeg
            // e.g. import... from '@/assets/.../file.png'
            // e.g. getImg("Teak Wood.png")

            const regex = /([^"']*\.)(png|jpg|jpeg)(["'])/gi;

            if (regex.test(content)) {
                console.log(`Updating imports in: ${fullPath}`);
                const newContent = content.replace(regex, '$1webp$3');
                await fs.writeFile(fullPath, newContent, 'utf8');
            }
        }
    }
}

async function main() {
    console.log('Starting global import updates...');
    await processDirectory(SRC_DIR);
    console.log('Global import updates complete.');
}

main().catch(console.error);
