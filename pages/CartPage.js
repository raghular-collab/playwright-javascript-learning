import{expect} from '@playwright/test'
const ProductsPage=require('../pages/ProductPage')
const CartsPage=require('../pages/CartPage')

class CartPage{

    constructor(page){
        this.page=page
        this.cartTitle=page.getByText('Your Cart')
        this.itemBackPack=page.getByText('Sauce Labs Backpack')
        this.checkoutButton='#checkout'
    }

    async cartTitleVerify(){
        const product = new ProductsPage(this.page)
        await product.addBackPack()
        await expect(this.cartTitle).toHaveText('Your Cart')
        await this.page.click(this.checkoutButton)
    }

    async checkout(){
        const product = new ProductsPage(this.page)
        await product.addBackPack()
        await this.page.click(this.checkoutButton)
    }
}
module.exports=CartPage