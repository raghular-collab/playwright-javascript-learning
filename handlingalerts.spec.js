import{test} from '@playwright/test';

test('simple alerts',async({page})=>{
    await page.goto('https://demoqa.com/alerts');
    await page.locator('#alertButton').click();
    page.on('dialog',async(dialog)=>{
        if(dialog.type=='alert'){
            dialog.accept();
        }

    })

});