const {test,expect} = require("playwright/test");

test('AutoSuggestDropdown',async({page})=>{
await page.goto('https://www.redbus.in/');

await page.locator('#src').fill('delhi');

await page.waitForSelector("//li[@class='sc-iwsKbI jTMXri']/div/text[1]")

 const fromCityOptions =await page.$$("//li[@class='sc-iwsKbI jTMXri']/div/text[1]");
//const fromCityOptions =await page.locator("//li[@class='sc-iwsKbI jTMXri']/div/text[1]").all();
     for(const option of fromCityOptions){
    const value =await option.textContent();
     //console.log(value);
     if(value.includes('Badarpur')){
        option.click();
        break;
     }
}

})