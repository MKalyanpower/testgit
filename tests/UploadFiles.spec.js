const {test,expect} = require("playwright/test");


 test('singlefile',async({page})=>{


    await page.goto('https://www.foundit.in/');

    //uploading single file
   /* await page.waitForSelector(".Uploadfiles");
    await page.locator(".Uploadfiles").click();
    await page.locator('#file-upload').setInputFiles('filepath');*/

await page.waitForTimeout(5000);

})
//uploading mutipe files
test.only('Multiplefile',async({page})=>{
//to execute this test only

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

 await page.locator('#file-upload').setInputFiles(['','']);
  expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('file.pdf');

 
 await page.waitForTimeout(5000);
 //removing files
 await page.locator('#file-upload').setInputFiles([]);//keep empty ,files automatically detached
 //to delete files
expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected');
})
