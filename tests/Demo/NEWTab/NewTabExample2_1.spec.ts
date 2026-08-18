import { test, expect } from '@playwright/test';
test('handle new tab opened by clicking a link', async ({ page, context }) => {
  await page.goto('https://www.wikipedia.org');

  // Force open Wikipedia English page in a new tab
  await page.waitForTimeout(5000);
  const [newPage] = await Promise.all([ //Promise.all return array 
    context.waitForEvent('page'),
    page.evaluate(() => {
      window.open('https://en.wikipedia.org/wiki/Main_Page', '_blank'); // this link is opened in a new tab after clicking the 
    })
]);

  await newPage.waitForLoadState('domcontentloaded');
  console.log('New tab URL:', newPage.url());
  await page.waitForTimeout(5000);

  await expect(newPage).toHaveURL(/en.wikipedia.org/);
  await expect(newPage).toHaveTitle(/Wikipedia/);
});