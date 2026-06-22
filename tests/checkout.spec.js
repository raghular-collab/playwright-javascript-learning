import{test,expect} from '@playwright/test'
require('../hooks/testHooks1')
const ProductsPage=require('../pages/ProductPage')
const CartsPage=require('../pages/CartPage')
const CheckOutPage=require('../pages/checkoutPage')
const TestData=require('../test-data/checkoutdata')

test('verify checkout',async({page})=>{
    const productpage=new ProductsPage(page)
    const cartpage=new CartsPage(page)
    const checkoutpage=new CheckOutPage(page)

    await cartpage.cartTitleVerify()
    await checkoutpage.validcheckout()


})