import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https://psgbiz.com';
const scrapedDir = path.join(__dirname, '_scraped');
const imagesDir = path.join(scrapedDir, 'images');
const pagesFile = path.join(scrapedDir, 'pages.json');

// Create directories
if (!fs.existsSync(scrapedDir)) fs.mkdirSync(scrapedDir, { recursive: true });
if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });

const visitedUrls = new Set();
const pages = [];

async function downloadImage(url, filename) {
  try {
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    const filepath = path.join(imagesDir, filename);
    fs.writeFileSync(filepath, Buffer.from(buffer));
    return filepath;
  } catch (error) {
    console.error(`Failed to download image ${url}:`, error.message);
    return null;
  }
}

async function scrapePage(page, url, depth = 0) {
  if (depth > 5 || visitedUrls.has(url)) return;
  
  try {
    console.log(`Scraping: ${url} (depth: ${depth})`);
    visitedUrls.add(url);
    
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(2000);
    
    // Extract page data
    const pageData = await page.evaluate(() => {
      const data = {
        url: window.location.href,
        route: window.location.pathname,
        title: document.title,
        meta: {},
        content_html: document.body.innerHTML,
        content_text: document.body.innerText,
        images: [],
        links: [],
        json_ld: []
      };
      
      // Extract meta tags
      document.querySelectorAll('meta').forEach(meta => {
        const name = meta.getAttribute('name') || meta.getAttribute('property');
        const content = meta.getAttribute('content');
        if (name && content) {
          data.meta[name] = content;
        }
      });
      
      // Extract images
      document.querySelectorAll('img').forEach(img => {
        const src = img.src;
        const alt = img.alt || '';
        if (src && !src.startsWith('data:')) {
          data.images.push({ src, alt });
        }
      });
      
      // Extract internal links
      document.querySelectorAll('a[href]').forEach(a => {
        const href = a.href;
        if (href.includes(window.location.hostname)) {
          data.links.push(href);
        }
      });
      
      // Extract JSON-LD
      document.querySelectorAll('script[type="application/ld+json"]').forEach(script => {
        try {
          data.json_ld.push(JSON.parse(script.textContent));
        } catch (e) {}
      });
      
      return data;
    });
    
    // Download images
    let imageIndex = 0;
    for (const img of pageData.images) {
      const filename = `${pageData.route.replace(/\//g, '_') || 'home'}_${imageIndex}.jpg`;
      const localPath = await downloadImage(img.src, filename);
      if (localPath) {
        img.localPath = localPath;
      }
      imageIndex++;
    }
    
    pages.push(pageData);
    
    // Follow internal links
    const uniqueLinks = [...new Set(pageData.links)];
    for (const link of uniqueLinks.slice(0, 20)) { // Limit to avoid too many pages
      if (!visitedUrls.has(link)) {
        await scrapePage(page, link, depth + 1);
      }
    }
    
  } catch (error) {
    console.error(`Error scraping ${url}:`, error.message);
  }
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  // Start scraping from homepage
  await scrapePage(page, baseUrl);
  
  // Save pages data
  fs.writeFileSync(pagesFile, JSON.stringify(pages, null, 2));
  console.log(`\nScraping complete! Scraped ${pages.length} pages.`);
  console.log(`Data saved to: ${pagesFile}`);
  
  await browser.close();
})();
