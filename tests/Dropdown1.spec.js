

const {test,expect}= require('@playwright/test')

test('Dropdown1',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

//     const options = await page.locator('#country').all();
//     let status =false;
//     for(var option of options){
//     let value = await option.textContent();
//     console.log(value);
//     if(value.includes("France")){
//        // console.log("Yes");
//         status =true;
//         break;
//     }
// }
//     await expect(status).toBeTruthy();
     
        const options = await page.locator('#country').all();
        let name="France"
        for(var option of options){ 

            
           let value= await option.textContent();
           
           if(value.includes(name)){
            await page.locator(`xpath://option[@value="france"]`).click();
        //    await page.selectOption('#country',name);
            }

               }
        
               

        //    if(value.includes('France')){
        //     await  page.selectOption('#country','value')
        //    }
        
await page.waitForTimeout(3000);

})