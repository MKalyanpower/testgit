const{test,expect}=require('@playwright/test');
//Capturing page screenshot
test('page Screenshot',async({page})=>{
    await page.goto("https://www.opencart.com/index.php?route=cms/demo");

    
await page.screenshot({path:'tests/Screenshots/'+Date.now()+'Homepage.png'});
})

//Capturing full page screenshot
test('Full page Screenshot',async({page})=>{
    await page.goto("https://www.opencart.com/index.php?route=cms/demo");

await page.screenshot({path:'tests/Screenshots/'+Date.now()+'Fullpage.png',fullPage:true});
await page.waitForTimeout(5000);
}) 


//Capturing element screenshot
test.only('Element Screenshot',async({page})=>{
    await page.goto("https://demoblaze.com/index.html");

await page.locator("(//div[@class='col-lg-4 col-md-6 mb-4'])[4]").screenshot({path:'tests/Screenshots/'+Date.now()+'Samsung.png'});
await page.waitForTimeout(5000);
}) 