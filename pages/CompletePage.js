import{expect} from '@playwright/test'
const ProductsPage=require('../pages/ProductPage')
const CartsPage=require('../pages/CartPage')
const CheckoutPage=require('../pages/CheckoutPage')
const TestData=require('../test-data/checkoutdata')

class CompletePage{
    constructor(page){
        this.page=page
        this.completeLabel=page.getByText('Checkout: Complete!')
        this.thankyou=page.getByText('Thank you for your order!')
    }
    async validateComplete(){
        await expect(this.completeLabel).toHaveText('Checkout: Complete!')
        await expect(this.thankyou).toHaveText('Thank you for your order!')
    }
}

module.exports=CompletePage