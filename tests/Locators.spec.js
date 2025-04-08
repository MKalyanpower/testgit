const {test,expect}=require('@playwright/test');



test('Locators',async({page})=>{

    await page.goto('https://demoblaze.com/index.html');

    //click on login button/link using property
    await page.click('id=login2');//also we can use page.locator('<property>').click();
    //filling the credentials in the text fields
    
    //await page.locator('#loginusername').fill('pavanol');
    await page.fill('#loginusername','pavanol');
    //await page.type('#loginusername','<value>');
    
    //css selector
    await page.locator('id=loginpassword').fill('test@123');
    
    await page.click("//button[normalize-space()='Log in']");

    const accountName =await page.locator("id=logout2");
    await expect(accountName).toBeVisible();
    await page.close();
})