import{test} from '@playwright/test';

test('simple drop down',async({page})=> {
    await page.goto('https://testautomationcentral.com/demo/dropdown.html');

    await page.locator("//button[contains(@class,'tab px-4 py-2 text-blue-500 hover:bg-blue-200 focus:outline-none active')]").click();
    //select by value
    await page.selectOption("//select[contains(@class,'form-select block w-full mt-1')]",{value:'option3'});
    //select by label    
    await page.selectOption("//select[contains(@class,'form-select block w-full mt-1')]",{label:'Option 2'});
    //select by index
    await page.selectOption("//select[contains(@class,'form-select block w-full mt-1')]",{index: 0});
    await page.waitForTimeout(2000);
});

test('multi dropdown',async({page})=>{
    await page.goto('https://testautomationcentral.com/demo/dropdown.html');

    await page.getByRole('button', { name: 'Multi-Select' }).click();

    await page.selectOption("//select[contains(@class,'form-multiselect block w-full mt-1')]",['option1', 'option3', 'option5']);
    await page.waitForTimeout(2000);

});