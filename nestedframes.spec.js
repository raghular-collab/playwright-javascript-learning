import{test} from '@playwright/test';

test('Nested Frames',async({page})=>{
    await page.goto('https://www.dezlearn.com/nested-iframes-example/');
    //first fetch locator for outer frame
    const parent_frame = page.frameLocator('#parent_iframe');
    //then fetch locator for inner frame inside the outer frame
    const inner_frame = parent_frame.frameLocator('#iframe1');

    await inner_frame.locator('#u_5_6').click();

    await parent_frame.locator('#u_5_5').click();
});