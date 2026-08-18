import { test, expect, chromium } from '@playwright/test';

test('handle file download', async () => {
  const browser = await chromium.launch();

  const context = await browser.newContext({
    acceptDownloads: true  // must enable this
  });

  const page = await context.newPage();
  await page.goto('https://the-internet.herokuapp.com/download');

  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('link').first().click()
  ]);

  const path = await download.path();
  console.log('Downloaded file path:', path);

  await download.saveAs('./downloads/' + download.suggestedFilename());
  console.log('Saved as:', download.suggestedFilename());

  await browser.close();
});