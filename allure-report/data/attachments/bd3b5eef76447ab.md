# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Demo\AdminHRM2Test.spec.ts >> AdminHRM >> TC-01 | ADD USER
- Location: tests\Demo\AdminHRM2Test.spec.ts:17:17

# Error details

```
TypeError: Cannot read properties of undefined (reading 'locator')
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
> 14 |         const profileIcon = this.page.locator("//button[text()=' Upgrade']//following::li[1]");
     |                                       ^ TypeError: Cannot read properties of undefined (reading 'locator')
  15 |         await profileIcon.click();
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