// Writes the server-rendered page into dist/public/index.html.
import { readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = path.resolve(import.meta.dirname, '..');
const htmlPath = path.join(root, 'dist/public/index.html');
const serverDir = path.join(root, 'dist/server');

const { render } = await import(pathToFileURL(path.join(serverDir, 'entry-server.js')).href);
const appHtml = render();
if (!appHtml.includes('Hyungro Yoon')) throw new Error('Prerendered HTML is missing page content');

const template = await readFile(htmlPath, 'utf8');
const placeholder = '<div id="root"></div>';
if (!template.includes(placeholder)) throw new Error('Root placeholder not found in index.html');

await writeFile(htmlPath, template.replace(placeholder, `<div id="root">${appHtml}</div>`));
await rm(serverDir, { recursive: true, force: true });
console.log(`Prerendered ${appHtml.length} characters into dist/public/index.html`);
