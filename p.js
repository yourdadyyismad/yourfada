const { chromium } = require('playwright')


const browser = await chromium.launch()
const context = await browser.newContext()
const page = await context.newPage ()

await page.goto('https://github.com/BLUEXDEMONI')

