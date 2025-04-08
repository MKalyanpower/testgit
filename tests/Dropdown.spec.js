const {test,expect}= require('@playwright/test')

test('Dropdown',async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    //Multiple ways to select option from dropdown  
//await page.locator('#country').selectOption({label:'India'})//label/visible text
//await page.locator('#country').selectOption('India')//visible text
//await.selectOption({value:'uk'});//value
//await page.locator('#country') page.locator('#country').selectOption({index:1});//by index value
//await page.selectOption('#country','India');//calling  selectOption directly /by text

//Assertions

//1)checking no.of options in dropdown
//const options =await page.$$('#country option')
//await expect(options).toHaveLength(10);


/*const options =await page.locator('#country').all();

for(var option of options){
    console.log(await option.textContent());
}
    */

/*const option = await page.locator('#country').all
//console.log('no.of options:',options.length);
await expect(option).toHaveLength(10);
*/

//2)check no.of options in dropdown
//const options = await page.$$('#country option');
//console.log('no.of options:',options.length);
//await expect(options.length).toBe(10);


//3)check the presence of value in the dropdrown --by using direct function

const content =await page.locator('#country').textContent();
//the text content will be stored in the form of string 
await expect(content.includes('India')).toBeTruthy();

//3)check the presence of value in the dropdrown --by using looping 
//let status= false
//console.log(options.textContent);


})