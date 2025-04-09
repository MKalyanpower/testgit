const {test,expect} = require("@playwright/test");
test('MultipleDropdown',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    //select multiple options from multi-select dropdown using array
    //await page.selectOption('#colors',['blue','yellow','green']);

    //Assertions 
    //1)Checking no.of options in the dropdown
    
//  const options = await page.locator('#colors option'); //$$('#colors option')-get options in the form of  array
    
//   await expect(options).toHaveCount(7);




  


//2)check the no.of options in dropdowns using js array

// const   options = await page.$$('#colors option')

// //console.log('no.of options',options.length)
// await expect(options.length).toBe(7);
 
const content =await page.locator('#colors').textContent();
   await expect(content.includes('Black ')).toBeTruthy();//try negative data and check
   

})

