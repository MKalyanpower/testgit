const{test,expect}=require('@playwright/test');


//using 
//screenshot:'on' in config file
test.only('config Screenshot',async({page})=>{


    await page.goto('https://demoblaze.com/index.html');
    await page.getByRole('link', { name: 'Log in' }).click();
    
    await page.locator('#loginusername').fill('pavanol');
    
  
    await page.locator('#loginpassword').fill('test@123');
    await page.getByRole('button', { name: 'Log in' }).click()
await page.waitForTimeout(5000);
}) 