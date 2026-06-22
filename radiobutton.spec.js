import{test} from '@playwright/test';

test('radio btns',async({page})=>{
    await page.goto('https://testautomationcentral.com/demo/radiobuttons.html');

    await page.locator("//span[text()='Option A']").click();
    await page.locator("//span[text()='Option B']").click();
    await page.locator("//span[text()='Option C']").click();

    await page.locator("//span[text()='Styled Option A']").click();
    await page.locator("//span[text()='Styled Option B']").click();
    await page.locator("//span[text()='Styled Option C']").click();
    await page.waitForTimeout(2000);
});

test('radio btn',async({page})=>{
    await page.goto("https://xqa.io/practice/radio-button");

    await page.locator("//label[text()='Yes']").click();
    await page.locator("//label[text()='Impressive']").click();
    await page.waitForTimeout(2000);
})