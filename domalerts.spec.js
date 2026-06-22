//A DOM based pop is not a  browser alert.It is just a normal HTML element rendered inside page DOM.

import {test} from '@playwright/test'

test('DOM Alerts',async({page})=>{
    await page.goto('https://www.flipkart.com/');
    await page.waitForSelector('.b3wTlE',{timeout: 5000});
    await page.locator('.b3wTlE').click();
    console.log('DOM Alert handled');

});

test('DOM Alerts 1',async({page})=>{
    await page.goto('https://demoqa.com/modal-dialogs');
    await page.locator('#showSmallModal').click();
    await page.locator('#closeSmallModal').click();

    await page.locator('#showSmallModal').click();
    await page.locator('.btn-close').click();

    await page.locator('#showLargeModal').click();
    await page.locator('#closeLargeModal').click();

    await page.locator('#showLargeModal').click();
    await page.locator('.btn-close').click();
});

