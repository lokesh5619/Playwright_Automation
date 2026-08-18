import { test, expect } from '@playwright/test';

test('handle confirm dialog', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  page.on('dialog', async (dialog) => {
    console.log('Type:', dialog.type());
    console.log('Message:', dialog.message());
   // await dialog.accept();
     await dialog.dismiss(); // for Cancel
  });

  await page.getByRole('button', { name: 'Click for JS Confirm' }).click();
  await expect(page.locator('#result')).toHaveText('You clicked: Cancel');
});