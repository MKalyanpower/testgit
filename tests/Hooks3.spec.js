const { beforeEach } = require("node:test");
const {test,expect} = require("playwright/test");

let page;
test.beforeAll(async({browser})=>{
   page= await browser.newPage();
    await page.goto('https://demoblaze.com/index.html');
    //login

    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.locator("//button[normalize-space()='Log in']").click();
});

test.afterAll(async()=>{
    await page.locator('#logout2').click();
})

 test('Login',async()=>{
//homepage 
const products=(await page.$$('.hrefch'));

await expect(products).toHaveLength(9);
    //logout
   
})

test('AddCart',async()=>{


    //add product to the cart
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
    await page.waitForSelector("//a[normalize-space()='Add to cart']");

    await page.locator("//a[normalize-space()='Add to cart']").click();
    
    await page.on('dialog',async dialog=>{
       await  expect(dialog.message()).toContain('Product added');
        await dialog.accept();

    })
    await page.waitForTimeout(5000);
    


})