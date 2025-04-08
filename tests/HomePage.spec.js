const {test,validate, expect}= require('@playwright/test');

test('Home page',async({page})=>{
await page.goto('https://demoblaze.com/index.html');
//to capture the title of the page
const pageTitle=await page.title();
console.log('page title is:',pageTitle);
//to validate the title
 await expect(page).toHaveTitle('STORE');
 // to capture the url
   const pageUrl=page.url();
  console.log("page url is:",pageUrl)
//to validate the url
 await  expect(page).toHaveURL('https://demoblaze.com/index.html')
await page.close();

})

 
