const{test,expect}=require('@playwright/test')

test('Inputbox',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    await expect(await page.locator('id=name')).toBeVisible()
    await expect(await page.locator('id=name')).toBeEmpty()
    await expect(await page.locator('id=name')).toBeEditable()
    await expect(await page.locator('id=name')).toBeEnabled()
  
    await page.locator('id=name').fill('kalyan')

    await page.waitForTimeout(5000)




})