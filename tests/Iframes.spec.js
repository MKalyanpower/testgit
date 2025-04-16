const {test,expect} = require("playwright/test");

//Alert
 test('Iframes',async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames//");
    const allframes = await page.frames(); // array of frames
    console.log('Number of frames',allframes.length);

    //frame objects Approach1 using name or url of the frame

   //const var = await page.frame(name); if name available  
   // const frame1 =await page.frame({url:'https://ui.vision/demo/webtest/frames//frame_1.html'});

   // await frame1.fill("[name='mytext1']",'hello!');


   //Approach2 using frame locator
 const inputBox =await  page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']");

await inputBox.fill("Hello!");
    
await page.waitForTimeout(5000);

 });