# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Demo\LeftPanelTest.spec.ts >> HRM >> Verify Admin Page Visibility
- Location: tests\Demo\LeftPanelTest.spec.ts:13:17

# Error details

```
"beforeAll" hook timeout of 60000ms exceeded.
```

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('//button[text()=\' Upgrade\']//following::li[1]')
    - waiting for" https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate" navigation to finish...

```

# Test source

```ts
  1  | import {Page , Expect , Locator} from '@playwright/test';
  2  | 
  3  | export class ProfileIcon
  4  | {
  5  |     page:Page;
  6  | 
  7  |     constructor(page:Page)
  8  |     {
  9  |         this.page=page;
  10 |     }
  11 | 
  12 |     async clickOnProfileIcon()
  13 |     {
  14 |         const profileIcon = this.page.locator("//button[text()=' Upgrade']//following::li[1]");
> 15 |         await profileIcon.click();
     |                           ^ Error: locator.click: Target page, context or browser has been closed
  16 |         await this.page.waitForTimeout(2000);
  17 |     }
  18 |     
  19 |     async clickOnAbout()
  20 |     {
  21 |         const logout = this.page.locator("[role='menu']>li:nth-child(1)");
  22 |         await logout.click();
  23 |     }
  24 |     async clickOnSupport()
  25 |     {
  26 |         const logout = this.page.locator("[role='menu']>li:nth-child(2)");
  27 |         await logout.click();
  28 |     }
  29 |     async clickOnChangePassword()
  30 |     {
  31 |         const logout = this.page.locator("[role='menu']>li:nth-child(3)");
  32 |         await logout.click();
  33 |     }
  34 |     async clickOnLogout()
  35 |     {
  36 |         const logout = this.page.locator("[role='menu']>li:nth-child(4)");
  37 |         await logout.click();
  38 |         await this.page.waitForTimeout(5000);
  39 |     }
  40 | }
```