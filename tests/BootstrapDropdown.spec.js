const {test,expect} = require("@playwright/test");
test('MultipleDropdown',async({page})=>{
    await page.goto("https://jquery-az.com/boots/demo.php?ex=63.0_2");
              
    await page.locator("(//button[@type='button'])[2]").click();//css to find li elements inside ul l>li label input
    
    // const options= await page.locator('ul l>li label input');
    //            await expect(options).toHaveCount(11);
        await page.waitForTimeout(3000);
    const options= await page.$$('ul>li label');

    for(let option of options){
        const  value =await option.textContent();
        //console.log("value is",value);
        if(value.includes('Angular')|| value.includes('Java')){
        await option.click();
        }
        
    }
    
              
})