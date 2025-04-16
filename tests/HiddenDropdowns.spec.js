const { test, expect } = require('@playwright/test');

test('login', async ({ page }) => {

  // Go to the site
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
  await page.locator("//input[@name='username']").fill('Admin');
  await page.locator("//input[@name='password']").fill('admin123');
  await page.locator("//button[@type='submit']").click();
  await page.locator("//span[normalize-space()='PIM']").click();
  const options= page.locator("(//div[@class='oxd-select-text--after'])[3]");
  


  
  //  await page.$$(`//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[6]/div/div[2]/div/div/div[2]/i`).click();
  //  await page.waitForTimeout(3000);
     await options.click();
     const opts=await page.locator(`xpath=//*[@role='listbox']`).first();
     console.log( await opts.textContent());
    //  for(let option of opts){
    //   console.log( await option.textContent());
    //  }

    


  await page.waitForTimeout(5000);
})
