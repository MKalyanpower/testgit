const{test,expect}=require('@playwright/test')

test('Checkbox',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
   
   await page.locator("//input[@id='sunday'and @type ='checkbox']").check()
   // await page.check("//input[@id='sunday'and @type ='checkbox']")

    await expect(await page.locator("//input[@id='sunday'and @type ='checkbox']")).toBeChecked()
    await expect(await page.locator("//input[@id='sunday'and @type ='checkbox']").isChecked()).toBeTruthy()
    await expect(await page.locator("//input[@id='monday'and @type ='checkbox']").isChecked()).toBeFalsy()
    await page.waitForTimeout(5000)//pausing code
    //Handling multiple checkboxes

     const checkboxesLocators= [
        "//input[@id='sunday'and @type ='checkbox']",
         "//input[@id='saturday'and @type ='checkbox']",
         "//input[@id='friday'and @type ='checkbox']"
     ];

    for(const locator of checkboxesLocators) //check the checkboxes
        {
      await page.locator(locator).check() 
    }

    for(const locator of checkboxesLocators) //check the checkboxes which are already selected
    {

        if(await page.locator(locator).isChecked){
            await page.locator(locator).uncheck()
        
        }

}
})