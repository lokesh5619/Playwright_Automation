import {test, expect} from '@playwright/test'

test("ORNGHRM",async({page})=>{
    await page.goto('http://facebook.com');
    await page.waitForTimeout(1000);
    
    await page.locator("[id=login_form]>div>div>div>div>div>div>div>input[name=email]").fill('Lokesh');
    await page.waitForTimeout(1000);
    
    await page.locator("[id=login_form]>div>div>div>div:nth-child(2)>div>div>div>input").fill('lokesh');
    await page.waitForTimeout(1000);
    
    await page.locator("[id=login_form]>div>div>div>div:nth-child(5)>div>a").click();
    await page.waitForTimeout(1000);
    
    await page.locator("#_R_1cl2p4jikacppb6amH1_").fill("Lokesh");
    await page.waitForTimeout(1000);
    
    await page.locator("#_R_1kl2p4jikacppb6amH1_").fill("Vishwakarma");
    await page.waitForTimeout(1000);
    
    //Date of birth
    //Day
    await page.locator("[role=group]>div:first-child>div>div").click();
    await page.waitForTimeout(1000);
    
    await page.locator("[role='group']>div:first-child>div>div>div:last-child[role='listbox']>div:nth-child(1)").click();
    await page.waitForTimeout(1000);
    
    //Month
    await page.locator("[role=group]>div:nth-child(2)>div>div").click();
    await page.waitForTimeout(1000);
    
    await page.locator("[role='group']>div:nth-child(2)>div>div>div:last-child>div:nth-child(3)").click();
    await page.waitForTimeout(1000);
    
    // //Year
    await page.locator("[role=group]>div:last-child>div>div").click();
    await page.waitForTimeout(1000);
   

    // await page.locator("[role=group]>div:last-child>div>div>div:last-child>div:nth-child(23)").click();
    // await page.waitForTimeout(1000);

// [role='group']>div:nth-child(2)>div>div>div:last-child[role='listbox']
})