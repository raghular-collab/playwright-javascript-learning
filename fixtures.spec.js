import{test,chromium} from '@playwright/test'

test('fixtures',async({page})=>{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page1 = await context.newPage();
    const page2 = await context.newPage();

    await page1.goto('https://github.com/');
    await page2.goto('https://chatgpt.com/c/6a17c0e5-8c9c-8321-a9ef-d5eea0a1637b');
})