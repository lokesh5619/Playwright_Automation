import { test, expect } from '@playwright/test';

test('list all open pages', async ({ browser }) => {
  const context = await browser.newContext();

  await context.newPage().then(p => p.goto('https://google.com'));
  await context.newPage().then(p => p.goto('https://github.com'));
  await context.newPage().then(p => p.goto('https://wikipedia.org'));

  const allPages = context.pages();
  console.log('Total open tabs:', allPages.length); // 3

  // Print URL of each tab
  allPages.forEach((p, i) => {
    console.log(`Tab ${i + 1}: ${p.url()}`);
  });

  // Tab 1: https://www.google.com/
  // Tab 2: https://github.com/
  // Tab 3: https://www.wikipedia.org/
});