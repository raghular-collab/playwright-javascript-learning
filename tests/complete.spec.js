import{test,expect} from '@playwright/test'
require('../hooks/testHooks1')
const ProductsPage=require('../pages/ProductPage')
const CartsPage=require('../pages/CartPage')
const CheckoutPage=require('../pages/CheckoutPage')
const OverviewPage=require('../pages/CheckoutOverview')
const CompletePage=require('../pages/CompletePage')
const TestData=require('../test-data/checkoutdata')

test('verify complete',async({page})=>{
    const cart=new CartsPage(page)
    const checkout=new CheckoutPage(page)
    const overview=new OverviewPage(page)
    const complete=new CompletePage(page)

    await cart.checkout()
    await checkout.validcheckout()
    await overview.validateOverview()
    await complete.validateComplete()
})