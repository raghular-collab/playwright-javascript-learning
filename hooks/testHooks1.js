import {test} from '@playwright/test'
const TestData = require('../test-data/data')
const LoginPage = require('../pages/LoginPage')

test.beforeEach('Launch Page',async({page})=>{
    console.log('Test Started')
    await page.goto('https://www.saucedemo.com/')
    const loginPage = new LoginPage(page)
    
    await loginPage.login(TestData);


})

test.afterEach('Close Page',async({page},testInfo)=>{
    console.log('Test completed')
    await page.screenshot({
            path: `screenshots/${testInfo.title}.png`,
            fullPage: true
        })
})

