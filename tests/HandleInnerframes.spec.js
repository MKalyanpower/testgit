const {test,expect} = require("playwright/test");

//Alert
 test('Innerframes',async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames//");
    
    const frame3=await page.frame({url:"https://ui.vision/demo/webtest/frames//frame_3.html"});

    frame3.locator("//input[@name='mytext3']").fill("hello");

    // nested frame

        const childframes=frame3.childFrames(); //return array of frames inside frame
        await childframes[0].locator("//*[@id='i6']/div[3]/div").check();
        

    await page.waitForTimeout(3000);
})
