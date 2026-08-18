import { test, expect } from '@playwright/test';
test('handle alert dialog', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  // Listen BEFORE triggering the alert
  page.on('dialog', async (dialog) => {
    console.log('Type:', dialog.type());       // alert
    console.log('Message:', dialog.message()); // I am a JS Alert
    await dialog.accept(); // click OK
  });

  await page.getByRole('button', { name: 'Click for JS Alert' }).click();
  await page.waitForTimeout(3000); // wait for the alert to be handled

  await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
});