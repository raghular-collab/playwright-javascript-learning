import{test} from '@playwright/test'
require('../hooks/testHooks');
const LoginPage = require('../pages/LoginPage')
const TestData = require('../test-data/data')

test('verify login',async({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.login(TestData);
})