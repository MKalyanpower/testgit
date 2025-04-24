const { beforeEach } = require("node:test");
const {test,expect} = require("playwright/test");

//test.beforeEach({})
 test('Login',async({page})=>{


    await page.goto('https://demoblaze.com/index.html');
    //login

    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.locator("//button[normalize-space()='Log in']").click();

//homepage 
const products=(await page.$$('.hrefch'));

await expect(products).toHaveLength(9);
    //logout
    await page.locator('#logout2').click();

})

test.only('AddCart',async({page})=>{


    await page.goto('https://demoblaze.com/index.html');
    //Login
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.locator("//button[normalize-space()='Log in']").click();

    //add product to the cart
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
    await page.waitForSelector("//a[normalize-space()='Add to cart']");

    await page.locator("//a[normalize-space()='Add to cart']").click();
    
    await page.on('dialog',async dialog=>{
       await  expect(dialog.message()).toContain('Product added');
        await dialog.accept();

    })
    await page.waitForTimeout(5000);
    
//logout
await page.locator('#logout2').click();

})