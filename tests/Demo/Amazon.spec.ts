import {test , expect} from '@playwright/test'

test('Amazon Login',async ({page}) => {
    await page.goto("https://Amazon.com");
    await page.waitForTimeout(3000);

    //Search product
    await page.locator("//input[@type='text' or @placeholder='Search Amazon.in']").fill("watch");
    await page.waitForTimeout(3000);
    
    await page.locator("//div[@aria-rowindex='1']").click();
    await page.waitForTimeout(3000);
    
    //Select product
    await page.locator("(//span[@data-component-type='s-product-image'])[1]").click();
    await page.waitForTimeout(3000);
    
    // await page.locator("//div[@id='dp']//following::span[@id='wishListMainButton']").click();
    
    // await page.locator("//span[text()=' In stock ']//following::span[3]").click();
    
    //Add Wish List 
    await page.locator("//span[@id='wishListMainButton']").click();
    await page.waitForTimeout(3000);
    
    await page.locator("//input[@type='email' or @name='email']").fill("6263659258");
    await page.waitForTimeout(3000);
    
    // await page.locator("//span[text()='Continue']").click();
    
    await page.locator("//input[@type='email']//following::span[2]").click();
    await page.waitForTimeout(3000);
    
    // await page.waitForLoadState('networkidle');
    // await page.waitForLoadState('networkidle');
    
    
});