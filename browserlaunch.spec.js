import{test} from '@playwright/test';

test('launch browser', async({page})=>{
    await page.goto('https://www.google.com/');
});
