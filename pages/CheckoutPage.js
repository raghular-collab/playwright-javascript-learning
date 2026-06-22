import{expect} from '@playwright/test'
const ProductsPage=require('../pages/ProductPage')
const CartsPage=require('../pages/CartPage')
const TestData=require('../test-data/checkoutdata')

class CheckoutPage{
    constructor(page){
        this.page=page
        this.cartLabel=page.getByText('Checkout: Your Information')
        this.firstname=page.locator('#first-name')
        this.lastname=page.locator('#last-name')
        this.pincode=page.locator('#postal-code')
        this.continueBtn=page.locator('#continue')
    }

    async validcheckout(){
        //const productpage=new ProductsPage(this.page)
        //const cartpage=new CartsPage(this.page)

        await expect(this.cartLabel).toHaveText('Checkout: Your Information')

        await this.firstname.fill(TestData.firstname)
        await this.lastname.fill(TestData.lastname)
        await this.pincode.fill(TestData.pincode)
        await this.continueBtn.click()
    }
}

module.exports=CheckoutPage