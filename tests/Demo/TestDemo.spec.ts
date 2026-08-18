import {Page,expect,BrowserContext,Browser,test} from '@playwright/test';

test('handle new tab opened by clicking a link', async ({browser}) => {
    const context = await browser.newContext();

    const page1 = await context.newPage();
    await page1.goto('https://www.amazon.com');
    await page1.waitForTimeout(5000);

    const page2 = await context.newPage();
    await page2.goto('https://www.flipkart.com');
    await page2.waitForTimeout(5000);
    
    await page1.bringToFront();
    await page2.waitForTimeout(5000);
    await page2.bringToFront();
})