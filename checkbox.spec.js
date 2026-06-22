import{test} from '@playwright/test';

test('checkbox',async({page})=>{
    await page.goto("https://testautomationcentral.com/demo/checkboxes.html");

    await page.locator("//span[text()='Option 1']").check();
    await page.locator("//span[text()='Option 2']").check();
    await page.locator("//span[text()='Option 3']").check();

    await page.locator("//span[text()='Option 1']").uncheck();
    await page.locator("//span[text()='Option 2']").uncheck();
    await page.locator("//span[text()='Option 3']").uncheck();

    await page.locator("//span[text()='Styled Option 1']").check();
    await page.locator("//span[text()='Styled Option 2']").check();
    await page.locator("//span[text()='Styled Option 3']").check();

    await page.locator("//span[text()='Styled Option 1']").uncheck();
    await page.locator("//span[text()='Styled Option 2']").uncheck();
    await page.locator("//span[text()='Styled Option 3']").uncheck();

});