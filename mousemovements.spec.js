import{test} from '@playwright/test'

test('drag and drop',async({page})=>{
    await page.goto('https://demoqa.com/droppable')

    await page.dragAndDrop('#draggable','#droppable');
    await page.waitForTimeout(2000);
});

test('scroll',async({page})=>{
    await page.goto('https://www.amazon.in/')
    await page.locator("//button[text()='Continue shopping']").click();
    //to find total pixels in a page
    const pageHeight = await page.evaluate(() => {
    return document.body.scrollHeight;
})
console.log('Page Height is:',pageHeight);
    await page.mouse.wheel(0,2000);
    await page.waitForTimeout(5000);
});

test.only('mouse hover',async({page})=>{
    await page.goto('https://www.amazon.in/')
    await page.locator("//button[text()='Continue shopping']").click();
    await page.locator('//span[text()="Prime"]').hover();
    await page.waitForTimeout(3000);
});