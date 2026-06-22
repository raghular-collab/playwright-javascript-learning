import{expect} from '@playwright/test'
const ProductsPage=require('../pages/ProductPage')
const CartsPage=require('../pages/CartPage')
const CheckoutPage=require('../pages/CheckoutPage')
const TestData=require('../test-data/checkoutdata')

class CheckoutOverview{
    constructor(page){
        this.page=page
        this.overviewLabel=page.getByText('Checkout: Overview')
        this.finishBtn=page.locator('#finish')
    }

    async validateOverview(){
        await expect(this.overviewLabel).toHaveText('Checkout: Overview')

        await this.finishBtn.click()
        
    }
}

module.exports=CheckoutOverview