const { test, expect } = require('@playwright/test');

test('login', async ({ page }) => {

  // Go to the site
  await page.goto('https://qa-site3.dovetailinternet.net/ECommerce/Default.aspx#p-1');

  // Click the login link
  await page.locator("//a[contains(text(),'Login')]").click();

  // Fill in email and password
  await page.locator("//input[@type='email']").first().fill('account@test.dovetailinternet.com');
  await page.fill("//input[@type='password']", '123qwe');

  // Click Login button
  await page.locator("//span[contains(text(),'Login')]").click();

  // Confirm successful login
  await expect(page.locator("div#AccountInfo h1")).toBeVisible();

  // Search for product
  const searchBox = page.locator("//input[@id='ctl01_ctl02_SearchCriteria']");
  await searchBox.fill('A101');
  await searchBox.press('Enter');

//   // Wait for search result image to appear (handle timeout if not found)
//   try {
//     await page.locator("//img[@id='imgItemPhoto_ItemsTileListing_580']").waitFor({ state: "visible", timeout: 5000 });
//     console.log('yes');
//   } catch (e) {
//     console.log('Search result not found within timeout.');
//   }

if(await page.locator("//img[@id='imgItemPhoto_ItemsTileListing_580']").waitFor({status:"visible"})){
    console.log('yes');
  }
  

  // Optional wait (generally not recommended unless debugging)
  await page.waitForTimeout(5000);

});
