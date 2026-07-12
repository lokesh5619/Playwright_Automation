import {test , expect} from '@playwright/test'

test('Amazon Login',async ({page}) => {
    await page.goto("https://Amazon.com");

    await page.locator("//input[@type='text' or @placeholder='Search Amazon.in']").fill("watch");
    
    await page.locator("//div[@aria-rowindex='1']").click();
    
    // await page.locator("//div[@data-index='3' and @role='listitem']").click();
    // await page.locator("//div[@data-cel-widget='search_result_1' and @role='listitem']").click();
    await page.locator("(//span[@data-component-type='s-product-image'])[1]").click();
    await page.waitForLoadState('networkidle');
    // await page.locator("//a[text()='Add to List']").click();
    
    // await page.locator("/Aamzon/").isVisible();
    
    // await page.locator("//span[text()='Results']").isVisible;
    // await page.locator("//img[@alt='Black']/ancestor::li").click();
    
    
    // await page.locator("//img[@alt='Black']/ancestor::li").click();
    // await page.locator("//input[@type='submit' and  @value='Go']/ancestor::span").click();
    
});