const {test,expect} = require("playwright/test");


 test('Actions1',async({page})=>{


    await page.goto("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");

    //Mouse action drag and drop
    const source = await page.locator('#box6');
    const target= await page.locator('#box106');
    await source.hover();
    await page.mouse.down();
    
    await target.hover();
    await page.mouse.up();

/*await source.dragTo(target) */
await page.waitForTimeout(5000);

 })

    