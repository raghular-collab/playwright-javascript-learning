import{test} from '@playwright/test'

test('practice form',async({page})=>{
    await page.goto('https://xqa.io/practice/practice-form');

    //textbox
    await page.locator('#firstName').fill("Test");
    await page.locator('#lastName').fill("User");
    await page.locator('#userEmail').fill("test.user.@test.com");
    await page.locator('#userNumber').fill("998887766");
    await page.locator('#currentAddress').fill('testarea');

    //radio button
    await page.locator("//span[text()='Male']").click();

    //handling calendar
    await page.locator('#dateOfBirthInput').fill("2026-05-14");

    //checkbox
    await page.locator("//span[text()='Sports']").check();
    await page.locator("//span[text()='Reading']").check();
    await page.locator("//span[text()='Music']").check();

    //file upload
    await page.locator('#uploadPicture').setInputFiles('/Users/raghular/fileupload.html');

    //drop down
    await page.selectOption('#state',{value:'NCR'});
    await page.waitForTimeout(1000);
    await page.selectOption('#city',{label:'Delhi'});

    //button
    await page.locator('#submit').click();
})