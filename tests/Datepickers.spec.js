const {test,expect} = require("playwright/test");


 test('Datepicker',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

const month ="May";
const year = "2024";
const date="15";

await page.locator('#datepicker').click();

while(true){
    const currentmonth= await page.locator(".ui-datepicker-month").textContent();
    const currentyear= await page.locator(".ui-datepicker-year").textContent();
    //console.log("current month and year:",currentmonth,":",currentyear);
    if(currentmonth==month && currentyear==year)
        {
        break;
    }
    await page.locator('[title="Next"]').click();//for next month and year 
    // await page.locator('[title="Prev"]').click();//for previous month and year
}

//Date selection using loops
/*const dates = await page.$$("//a[@class='ui-state-default']");

for(const dt of dates){
   if(await dt.textContent()==date){
 await dt.click();
 break;
   }
}*/

//date selection without loop

await page.click(`//a[@class='ui-state-default'][text()='${date}']`);
// //await page.fill('#datepicker','06/12/2024');
await page.waitForTimeout(5000);
});