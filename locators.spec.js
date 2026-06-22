import{test} from '@playwright/test';

test('launch browser', async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    await page.locator('//h1[text()="Practice Page"]').textContent(); //Locator: xpath, textContent will return text present in the element
    await page.locator('#autocomplete').fill('Test'); //Locator: id, fill is used to pass values
    
    //checks and unchecks checkbox
    await page.locator('#checkBoxOption1').check(); 
    await page.locator('#checkBoxOption1').uncheck();
    await page.locator("//input[@value='radio1']").click();
    
    //click on the element
    await page.locator('//button[text()="Home"]').click();
    await page.locator('//button[text()="Practice"]').click();
    await page.locator('//button[text()="Login"]').click();
    await page.locator('//button[text()="Signup"]').click();
    
});