const {test,expect}= require('@playwright/test');
 
test('login',async ({page})=>{
    
    //login with valid data
    await page.goto('https://ecommerce-test.theoutdoorscompany.com/console');
   await  page.fill('#UserName','qa-admin');
   await page.fill('id=Password','OKqTJq&ij5DcQ2]');

   await page.locator("//div[@class='dxb']]").click;
   
   const pageTitle=await page.title();
   console.log('page title is:',pageTitle);
   expect(page).toHaveURL('https://ecommerce-test.theoutdoorscompany.com/Console/logon.aspx?ReturnUrl=%2fconsole');

   
   //to validate the title
   // await expect(page).toHaveTitle('CyberStore E-Commerce-Management Console');
    // to capture the url
     // const pageUrl=page.url();
    // console.log("page url is:",pageUrl)
   //to validate the url
    //await  expect(page).toHaveURL('https://ecommerce-test.theoutdoorscompany.com/Console/default.aspx')
   //await page.close();

 
  


   

// login with invalid data
/*await page.goto('https://ecommerce-test.theoutdoorscompany.com/console');
await  page.fill('#UserName','admin');
await page.fill('id=Password','OKqTJq&ij5DcQ2]');

await page.locator('class=dx-vam').click;
*/



})