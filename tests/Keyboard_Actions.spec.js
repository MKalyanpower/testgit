const {test,expect} = require("playwright/test");


 test('KeyboardActions',async({page})=>{


    await page.goto("https://gotranscript.com/text-compare");

    //await page.locator('name="text1"').fill('Welcome to Automation');
await page.fill('[name="text1"]','Welcome to Automation');
//when finding an element using css put the attribut in '[]'

await page.keyboard.press('Control+A')
await page.keyboard.press('Control+C')

await page.keyboard.down('Tab');
await page.keyboard.up('Tab');
await page.keyboard.press('Control+V')


    await page.waitForTimeout(5000);
})