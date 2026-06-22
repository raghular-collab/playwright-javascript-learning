import{test,expect} from '@playwright/test'
require('../hooks/testHooks1')
const ProductsPage=require('../pages/ProductPage')
const CartsPage=require('../pages/CartPage')
const CheckoutPage=require('../pages/CheckoutPage')
const OverviewPage=require('../pages/CheckoutOverview')
const TestData=require('../test-data/checkoutdata')

test('verify overview',async({page})=>{
    const product=new ProductsPage(page)
    const cart=new CartsPage(page)
    const checkout=new CheckoutPage(page)
    const overview=new OverviewPage(page)

    await cart.cartTitleVerify()
    await checkout.validcheckout()
    await overview.validateOverview()

})
