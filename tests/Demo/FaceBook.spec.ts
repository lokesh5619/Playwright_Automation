import {test, expect} from '@playwright/test'

test("FaceBook",async({page})=>{
    await page.goto('http://facebook.com');
    await page.waitForTimeout(1000);
    
    //email
    await page.locator("[id=login_form]>div>div>div>div>div>div>div>input[name=email]").fill('Lokesh');
    await page.waitForTimeout(1000);
    
    //password
    await page.locator("[id=login_form]>div>div>div>div:nth-child(2)>div>div>div>input").fill('lokesh');
    await page.waitForTimeout(1000);
    
    //Create new account
    await page.locator("[id=login_form]>div>div>div>div:nth-child(5)>div>a").click();
    await page.waitForTimeout(1000);
    
    //First name
    await page.locator("#_R_1cl2p4jikacppb6amH1_").fill("Lokesh");
    await page.waitForTimeout(1000);
    
    //Surname
    await page.locator("#_R_1kl2p4jikacppb6amH1_").fill("Vishwakarma");
    await page.waitForTimeout(1000);
    
    //Date of birth
    //Day
    await page.locator("[role=group]>div:first-child>div>div").click();
    await page.waitForTimeout(1000);
    
    await page.locator("text='28'").click();
    await page.waitForTimeout(1000);
    
    //Month
    await page.locator("[role=group]>div:nth-child(2)>div>div").click();
    await page.waitForTimeout(1000);
    
    await page.locator("text='October'").click();
    await page.waitForTimeout(1000);
    
    //Year
    await page.locator("[role=group]>div:last-child>div>div").click();
    await page.waitForTimeout(1000);
   
    await page.locator("text='2004'").click();
    await page.waitForTimeout(1000);
    
    //Gender
    await page.locator("#_R_mad6p4jikacppb6amH2_>div").click();
    await page.waitForTimeout(1000);
    
    await page.locator("text='Male'").click();
    await page.waitForTimeout(1000);
    
    
    //Mobile number
    await page.locator("[id='_R_6ad8p4jikacppb6amH1_']").fill("6263659258");
    await page.waitForTimeout(1000);
    
    //Password
    await page.locator("[type=password]").fill("626365");
    await page.waitForTimeout(1000);
    
    //I have Already an Account
    await page.locator(".xh8yej3>div>div>div:nth-child(9)>div>div>div:last-child>div>div").click();
    await page.waitForTimeout(1000);

})