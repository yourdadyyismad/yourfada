const { chromium } = require('playwright');
const random_useragent = require('random-useragent')
const URL = 'https:github.com/topics/playwright';

(async () => {
const agent = random_useragent.getRandom()
    
    // Launch a headless browser
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage(agent);

    // Navigate to the page
    await page.goto(URL, { waitUntil: 'domcontentloaded' });

    console.log(agent);
    // Close browser
    await browser.close();
})().catch(error) => {
console.log(error)
    process.exit(1)
}
