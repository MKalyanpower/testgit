

const {test,expect} = require("playwright/test");

//Alert
 test.skip('Alert_with_ok',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
//Enabling dialog window handler  
    await page.on('dialog',async dialog=>{
      //dialog is keyword which is stored in a variable dialog next to async keyword ,
      // variable represents alert box  
      await expect(dialog.type()).toContain('alert');
      await expect(dialog.message()).toContain('I am an alert box!');
      await dialog.accept();
                                                            
    } )
    await page.click("//button[normalize-space()='Simple Alert']");

    await page.waitForTimeout(7000);
  });


  //////confirmation
    test.skip('Confirmation dialog_with_ok and cancel',async({page})=>{
      await page.goto("https://testautomationpractice.blogspot.com/");
  //Enabling dialog window handler  
      await page.on('dialog',async dialog=>{
        //dialog is keyword which is stored in a variable dialog next to async keyword ,
        // variable represents alert box  
        await expect(dialog.type()).toContain('confirm');
        await expect(dialog.message()).toContain('Press a button!');
        await dialog.accept();//close by using ok button
        //await dialog.dismiss();//close by using cancel button

                                                              
      } )
      await page.click("//button[normalize-space()='Confirmation Alert']");
      await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed OK!')
  
      await page.waitForTimeout(5000);
 });

 //prompt
 test('prompt dialog',async({page})=>{
  await page.goto("https://testautomationpractice.blogspot.com/");
//Enabling dialog window handler  
  await page.on('dialog',async dialog=>{
    //dialog is keyword which is stored in a variable dialog next to async keyword ,
    // variable represents alert box  
     expect(dialog.type()).toContain('prompt');
    expect(dialog.message()).toContain('Please enter your name:'); 
    expect(dialog.defaultValue()).toContain('Harry Potter');
    await dialog.accept('kalyan');//close by using ok button
    //await dialog.dismiss();//close by using cancel button

                                                          
  } )
  await page.click("//button[normalize-space()='Prompt Alert']");
  await expect(page.locator("//p[@id='demo']")).toHaveText('Hello kalyan! How are you today?')

  await page.waitForTimeout(5000);
});

