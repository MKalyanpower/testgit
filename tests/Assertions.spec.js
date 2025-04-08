const {test,expect}= require('@playwright/test')

test('AssertionTest',async({page})=>{
  await  page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F')

//HARD ASSERTIONS
  
  //1)await expect(page).toHaveURL()	Page has a URL

  await expect(page).toHaveURL('https://demo.nopcommerce.com/register?returnUrl=%2F')
  //await expect(page).toHaveTitle()	Page has a title

  await expect(page).toHaveTitle('nopCommerce demo store. Register')
 const logoElement= await page.locator('.header-logo')
 //expect(locator).toBeVisible,Element is visible
 await expect(logoElement).toBeVisible()
 //await expect(locator).toBeEnabled()	Element is enabled
 const searchStoreBox = await page.locator('#small-searchterms')
 await expect(searchStoreBox).toBeEnabled()
 //await expect(locator).toBeDisabled()	Element is disabled

 //await expect(locator).toBeChecked()	Checkbox is checked
 const maleRadioButton =await page.locator('#gender-male')
 maleRadioButton.click()
 await expect(maleRadioButton).toBeChecked()


const  newsLettlerCheckbox= await page.locator('#Newsletter')
 await expect(newsLettlerCheckbox).toBeChecked()

 //await expect(locator).toHaveAttribute()	Element has a DOM attribute

 const regButton =await page.locator('#register-button')
 await expect(regButton).toHaveAttribute('type','submit');

 //await expect(locator).toHaveText()	Element matches text "need full text"
 await expect(await page.locator('.page-title h1')).toHaveText('Register')

 //await expect(locator).toContainText() Element contains text   "need partial text"
 await expect(await page.locator('.page-title h1')).toContainText('Reg')

 //await expect(locator).toHaveValue()	Input has a value 
const  emailInput =await page.locator('#Email')
await emailInput.fill('testDemo.com')
await expect(emailInput).toHaveValue('testDemo.com')

//await expect(locator).toHaveCount()	List has exact number of children  ---mainly used for dropdowns
/*const options=await page.locator('select[name='DateofBitthMonth']option')
await expect(options).toHaveCount(13)*/

//negative assertion --await expect(locator).not.toContainText('some text');







 

 











})