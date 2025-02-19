const { chromium } = require('playwright')


(async () => {
const browser = await chromium.launch()
const context = await browser.newContext()
const page = await context.newPage ()

await page.goto('https://github.com/suhail')

const [username] = await page.locator('.p-name vcard-fullname d-block overflow-hidden').allInnerTexts();

console.log(username);
await browser.close();
  })();
