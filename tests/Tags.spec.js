const {test,expect} = require("playwright/test");

test('test1@sanity',async ({page})=>{
    console.log('first test');
})

test('test2@sanity',async ({page})=>{
    console.log('second test');
})
test('test3a@reg',async ({page})=>{
    console.log('third test');
})

test('test4@reg',async ({page})=>{
    console.log('fourth test');
})
//testing the git
test('test5@sanity@reg',async ({page})=>{
    console.log('fifth test');
})