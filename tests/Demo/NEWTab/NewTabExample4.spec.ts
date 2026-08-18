import { test, expect } from '@playwright/test';

test('close new tab and return to original', async ({ page, context }) => {
  await page.goto('https://www.google.com');
   await page.waitForTimeout(5000);
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.evaluate(() => window.open('https://github.com'))
  ]);

  await newPage.waitForLoadState();
    await newPage.waitForTimeout(5000);
  await expect(newPage).toHaveURL(/github.com/);

  // Close the new tab
  await newPage.close();
  await page.waitForTimeout(5000);
  // Back to original tab
  await expect(page).toHaveURL(/google.com/);
});