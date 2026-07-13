import {test, expect} from '@playwright/test'

test("ORNGHRM",async({page})=>{
     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',{timeout:20000});
    
})