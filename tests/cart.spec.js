import{test,expect} from '@playwright/test'
require('../hooks/testHooks1')
const ProductsPage=require('../pages/ProductPage')
const CartsPage=require('../pages/CartPage')

test('verify cart title',async({page})=>{
    const cart = new CartsPage(page)
    await cart.cartTitleVerify()
})

test('verify checkout',async({page})=>{
    const cart = new CartsPage(page)
    await cart.checkout()
})