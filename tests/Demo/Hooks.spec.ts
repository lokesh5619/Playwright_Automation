import {test , expect,Page} from '@playwright/test'

test.describe.serial('HRM CRUD Operation',()=> {
    test.beforeAll(async()=>{
        console.log("beforeAll Test Cases......");
    });  

    test.beforeEach(async()=>{
        console.log("beforeEach Test Cases......");
    });

    test('TC-01 | First Test',async()=>{
        console.log("First Test Cases.....");
    });

    test('TC-02 | Second Test',async()=>{
        console.log("Second Test Cases.....");
    });

    test('TC-03 | Third Test',async()=>{
        console.log("Third Test Cases.....");
    });

    test('TC-04 | Fourth Test',async()=>{
        console.log("Fourth Test Cases.....");
    });

    test.afterEach(async()=>{
        console.log("afterEach Test Cases......");
    });

    test.afterAll(async()=>{
        console.log("afterAll Test Cases......");
    })
});