const{test,expect}=require('@playwright/test');


//using 
//screenshot:'on' in config file
test.only('test',async({page})=>{


    await page.goto('https://demoblaze.com/index.html');
    await page.getByRole('link', { name: 'Log in' }).click();
    
    await page.locator('#loginusername').fill('pavanol');
    
  
    await page.locator('#loginpassword').fill('test@123');
    await page.getByRole('button', { name: 'Log in' }).click();
    await expect(page.locator("(//a[normalize-space()='Log out'])[2]")).toBeVisible();

    await page.waitForTimeout(5000);
   
}) 