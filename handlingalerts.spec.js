import{test} from '@playwright/test';

test('simple alerts',async({page})=>{
    await page.goto('https://demoqa.com/alerts');
    await page.locator('#alertButton').click();
    page.on('dialog',async(dialog)=>{
        if(dialog.type()=='alert'){
            dialog.accept();
            console.log('simple alert handled');
        }
    })
});

test('confirm alert',async ({page})=>{
    await page.goto('https://demoqa.com/alerts');
    await page.locator('#confirmButton').click();
    page.on('dialog',async(dialog)=>{
        if(dialog.type()=='confirm'){
            dialog.accept();
            console.log('confirm alert handled');
        }
    })
});

test('prompt alert',async({page})=>{
    await page.goto('https://demoqa.com/alerts');
    await page.locator('#promtButton').click();
    page.on('dialog',async(dialog)=>{
        if(dialog.type()=='prompt'){
            dialog.accept('accepted');
            console.log('prompt alert handled');
        }
    })
});

test.only('wait alert',async({page})=>{
    await page.goto('https://demoqa.com/alerts');
    await page.locator('#timerAlertButton').click();
    page.on('dialog',async(dialog)=>{
        if(dialog.type()=='alert'){
            dialog.accept();
            console.log('timer alert handled');
        }
    })
})