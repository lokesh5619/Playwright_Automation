import { test, expect } from '@playwright/test';

test('handle prompt dialog', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  page.on('dialog', async (dialog) => {
    console.log('Type:', dialog.type());
    console.log('Default Value:', dialog.defaultValue());
    await dialog.accept('MAP');
   //  await dialog.dismiss('MAP'); it will not work because dismiss does not accept any value
  });

  await page.getByRole('button', { name: 'Click for JS Prompt' }).click();
  await expect(page.locator('#result')).toHaveText('You entered: RAM');
});