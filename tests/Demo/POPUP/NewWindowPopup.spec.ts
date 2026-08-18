import { test, expect } from '@playwright/test';

test('handle new window popup', async ({ page, context }) => {
  await page.goto('https://the-internet.herokuapp.com/windows');

  const [popup] = await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('link', { name: 'Click Here' }).click()
  ]);

  await popup.waitForLoadState('domcontentloaded');

  console.log('Popup URL:', popup.url());
  await expect(popup.locator('h3')).toHaveText('New Window');

  await popup.close();
  await expect(page).toHaveURL(/windows/);
});