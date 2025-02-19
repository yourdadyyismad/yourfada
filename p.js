const { chromium } = require('playwright');

const URL = 'https://4anime.gg/random';

(async () => {
    // Launch a headless browser
    const browser = await chromium.launch();
    const page = await browser.newPage();

    // Navigate to the page
    await page.goto(URL, { waitUntil: 'domcontentloaded' });

    // Extract title
    const title = await page.$eval('div.detail-min > h1', el => el.textContent.trim());

    // Extract genres
    const genres = await page.$$eval('div.genres a', elements => 
        elements.map(el => el.textContent.trim())
    );

    // Extract first episode link
    const vid = await page.$eval('.item.ep-item', el => el.getAttribute('href'));

    // Log the results
    console.log("Title:", title);
    console.log("Genres:", genres);
    console.log("First Episode Link:", vid);

    // Close browser
    await browser.close();
})();
