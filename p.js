const { chromium } = require('playwright');

const URL = 'https://4anime.gg/random';

(async () => {
    // Launch a headless browser
    const browser = await chromium.launch();
    const page = await browser.newPage();

    // Navigate to the page
    await page.goto(URL, { waitUntil: 'domcontentloaded' });

    // Extract title
    const title = await page.title();

    // Extract genres;

    // Log the results
    console.log("Title:", title)!

    // Close browser
    await browser.close();
})();
