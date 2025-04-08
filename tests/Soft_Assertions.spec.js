const {test,expect}= require('@playwright/test')

test('Soft_Assertions',async({page})=>{
await page.goto('https://demoblaze.com/index.html')

//Hard Assertion (fail the execution)
/*await expect(page).toHaveTitle('STORE12')
await expect(page).toHaveURL('https://demoblaze.com/index.html')
await expect(page.locator('.navbar-brand')).toBeVisible()
*/
//Soft Assertion(will continue the further execution)

await expect.soft(page).toHaveTitle('STORE12')
await expect.soft(page).toHaveURL('https://demoblaze.com/index.html')
await expect.soft(page.locator('.navbar-brand')).toBeVisible()

})