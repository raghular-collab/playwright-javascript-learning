import{test,expect} from '@playwright/test'
require('../hooks/testHooks1')
const ProductsPage=require('../pages/ProductPage')


test('verify title',async({page})=>{
    const productsPage=new ProductsPage(page)
    await productsPage.verifyProductTitle();
})

test('add backpack',async({page})=>{
    const productsPage=new ProductsPage(page)
    await productsPage.addBackPack();
})