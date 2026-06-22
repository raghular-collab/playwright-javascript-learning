import {test} from '@playwright/test'

test.beforeEach('Launch Page',async({page})=>{
    console.log('Test Started')
    await page.goto('https://www.saucedemo.com/')
})

test.afterEach('Close Page',async({page},testInfo)=>{
    console.log('Test completed')
    await page.screenshot({
            path: `screenshots/${testInfo.title}.png`,
            fullPage: true
        })
})