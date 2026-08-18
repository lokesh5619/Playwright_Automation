import { test, expect } from '@playwright/test';
test('force any link to open in new tab', async ({ page, context }) => {
  await page.goto('https://www.wikipedia.org');

  await page.waitForTimeout(5000);
  // Step 1 - find the link
  const link = page.getByRole('link', { name: 'English' });

  // Step 2 - force it to open in new tab
  await link.evaluate(el => el.setAttribute('target', '_blank'));

  // Step 3 - now click it
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    link.click()
  ]);

  await page.waitForTimeout(5000);

  await newPage.waitForLoadState('domcontentloaded');
  console.log('New tab URL:', newPage.url());

  await expect(newPage).toHaveURL(/en.wikipedia.org/);
  await expect(newPage).toHaveTitle(/Wikipedia/);
   await page.bringToFront();
   await page.waitForTimeout(5000);


});