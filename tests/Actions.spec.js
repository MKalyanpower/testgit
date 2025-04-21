const {test,expect} = require("playwright/test");


 test('Actions',async({page})=>{


    await page.goto("https://testautomationpractice.blogspot.com/");//https://www.amazon.in/
//mouse hover action
/*const account =await page.locator("//span[normalize-space()='Account & Lists']")
const babywishlist= await page.locator("//span [normalize-space()='Baby Wishlist']")
await account.hover();*/

//mouse right click
/*const button =await page.locator("//button[normalize-space()='Login']");
await button.click({button:'right'})*/


    //mouse double click
  const dbclick=  await page.locator("//button[normalize-space()='Copy Text']")


  await dbclick.dblclick();
  const tval=  await page.locator("//input[@id='field2']");

  await expect(tval).toHaveValue('Hello World!');

  await page.waitForTimeout(5000);
 });