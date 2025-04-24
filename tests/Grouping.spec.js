import {test,expect} from '@playwright/test'
//const{test,expect}=require('@playwright/test');

test.beforeAll(async()=>{
    console.log('before all');

})
test.afterAll(async()=>{
    console.log('after all');

})
test.beforeEach(async()=>{
    console.log('beforeEach');
})
test.afterEach(async()=>{
    console.log('afterEach');
})
test.describe('Group1',async ()=>{

    test('test1',async({page})=>{
        console.log('first test');
    })

    test('test2',async({page})=>{
        console.log('second test');
    })
})

test.describe.only('Group2',async ()=>{

    test('test1',async({page})=>{
        console.log('third test');
    })

    test('test2',async({page})=>{
        console.log('fourth test');
    })
})