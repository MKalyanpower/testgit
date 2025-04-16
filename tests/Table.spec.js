const {test,expect} = require("playwright/test");


 test('Handling Tables',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    const table =await page.locator('#productTable');

    const columns =await table.locator('thead tr th');
    console.log('number of columns:',await columns.count());
 expect(await columns.count()).toEqual(4)

    const rows =await table.locator('tbody tr')
    console.log('number of rows',await rows.count());
     expect(await rows.count()).toBe(5);
    
    


})
