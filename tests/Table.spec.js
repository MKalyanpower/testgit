const {test,expect} = require("playwright/test");


 test('Handling Tables',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    const table =await page.locator('#productTable');
//1)Total no.of rows and columns
    const columns =await table.locator('thead tr th');
    console.log('number of columns:',await columns.count());
 expect(await columns.count()).toEqual(4)

    const rows =await table.locator('tbody tr')
    console.log('number of rows',await rows.count());
     expect(await rows.count()).toBe(5);


//2)Select the checkbox for Smartwatch
// const matchedrow =rows.filter({
//    has:page.locator('td'),
//    hasText:'Smartwatch',
//   })
//   const value =rows.filter({
//    has:page.locator('td'),
//    hasText:'$7.99',
//   })

/*await matchedrow.locator("//input[@type='checkbox']").check();
//const required =await value.locator("//td[normalize-space()='$7.99']").textContent();
console.log(required);*/

//3)Selecting multiple products by re-usable function
// await Selection(rows,page,'Smartphone')
// await Selection(rows,page,'Tablet')
// await Selection(rows,page,'Smartwatch')


//4)printing all product details using loop

/*for(let i=0;i<await rows.count();i++){
const  row= rows.nth(i);
const tds= row.locator('td')

for(let j=0;j<await tds.count()-1;j++){

   console.log(await tds.nth(j).textContent());
}
   
}
*/

const pages = page.locator('#pagination li a');
console.log('Number of pages in table:',await pages.count());

for(let p=0;p<await pages.count();p++){

   if(p>0){
      await pages.nth(p).click();
   }
   for(let i=0;i<=await rows.count();i++){
      const  row= rows.nth(i);
      const tds= row.locator('td')
      
      for(let j=0;j<=await tds.count()-1;j++){
      
         console.log(await tds.nth(j).textContent());
      }
         
      }
      await page.waitForTimeout(3000);
}
  await page.waitForTimeout(5000);

 
 })
 //it is for above 3 approach
//  async function Selection(rows,page,name){
//    const value =rows.filter({
//       has:page.locator('td'),
//       hasText:name
//      })
//    await value.locator("//input[@type='checkbox']").check();
//  }