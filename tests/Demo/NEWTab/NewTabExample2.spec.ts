import { test, expect } from '@playwright/test';

// test('handle new tab opened by clicking a link', async ({ page, context }) => {
//   await page.goto('https://www.wikipedia.org');
// await page.waitForTimeout(5000);
//   // Listen for the new page BEFORE clicking
//   const [newPage] = await Promise.all([
//       context.waitForEvent('page'),         // wait for new tab to open
//       page.getByRole('link', { name: 'English' }).click() // click that opens new tab
//   ]);

//   // Wait for new tab to fully load
//   await newPage.waitForLoadState('domcontentloaded');

//   console.log('New tab URL:', newPage.url());
//   // Output: New tab URL: https://en.wikipedia.org/wiki/Main_Page

//   await expect(newPage).toHaveURL(/en.wikipedia.org/);
//   await expect(newPage).toHaveTitle(/Wikipedia/);
// });


test('handle navigation in same tab', async ({ page }) => {

  await page.goto('https://www.wikipedia.org');

  await page.getByRole('link', { name: 'English' }).click();

  await page.waitForLoadState('domcontentloaded');

  console.log('URL:', page.url());

  await expect(page).toHaveURL(/en.wikipedia.org/);
  await expect(page).toHaveTitle(/Wikipedia/);
});