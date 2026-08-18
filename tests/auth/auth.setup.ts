import { test as setup } from '@playwright/test';
import { Test_Configu } from '../Config/test-config';
import { LoginPage } from '../Pages/LoginPage';

setup('authenticate', async ({ page }) => {
  await page.goto(Test_Configu.baseURL);
  await page.waitForLoadState('networkidle');

  const loginPage = new LoginPage(page);
  await loginPage.enterUserName(Test_Configu.username);
  await loginPage.enterUserPassword(Test_Configu.password);
  await loginPage.clickOnLoginButton();

  await page.waitForURL('**/dashboard**');

  await page.context().storageState({ path: Test_Configu.authFile });
  console.log(`Session saved to ${Test_Configu.authFile}`);
});

