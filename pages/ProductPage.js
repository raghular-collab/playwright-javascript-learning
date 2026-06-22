import{expect} from '@playwright/test'
class ProductPage{
    constructor(page){
        this.page=page
        this.pageTitle= page.getByText('Products');
        this.backPack=page.getByText('Sauce Labs Backpack')
        this.addBackpack=page.locator('#add-to-cart-sauce-labs-backpack')
        this.addToCart=page.locator("//a[@data-test='shopping-cart-link']")
    }
    async verifyProductTitle(){
        await expect(this.pageTitle).toHaveText('Products');
        
    }
    async addBackPack(){
        await this.addBackpack.click()
        await this.addToCart.click()
    }
}

module.exports=ProductPage