const { test, expect } = require('@playwright/test');

test('login', async ({ page }) => {

  // Go to the site
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
  await page.locator("//input[@name='username']").fill('Admin');
  await page.locator("//input[@name='password']").fill('admin123');
  await page.locator("//button[@type='submit']").click();
  await page.locator("//span[normalize-space()='PIM']").click();
  await page.locator("(//div[@class='oxd-select-text--after'])[3]").click();

  await page.waitForTimeout(5000);
})
