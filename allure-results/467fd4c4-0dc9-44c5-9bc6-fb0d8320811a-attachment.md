# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Demo\LeftPanelTest.spec.ts >> HRM >> Verify Admin Page Visibility
- Location: tests\Demo\LeftPanelTest.spec.ts:12:17

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for getByLabel('Username')
    - waiting for" https://opensource-demo.orangehrmlive.com/web/index.php/auth/logout" navigation to finish...
    - navigated to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e6]:
    - img "company-branding" [ref=e8]
    - generic [ref=e9]:
      - heading "Login" [level=5] [ref=e10]
      - generic [ref=e11]:
        - generic [ref=e13]:
          - paragraph [ref=e14]: "Username : Admin"
          - paragraph [ref=e15]: "Password : admin123"
        - generic [ref=e16]:
          - generic [ref=e18]:
            - generic [ref=e19]:
              - generic [ref=e20]: 
              - generic [ref=e21]: Username
            - textbox "Username" [active] [ref=e23]
          - generic [ref=e25]:
            - generic [ref=e26]:
              - generic [ref=e27]: 
              - generic [ref=e28]: Password
            - textbox "Password" [ref=e30]
          - button "Login" [ref=e32] [cursor=pointer]
          - paragraph [ref=e34] [cursor=pointer]: Forgot your password?
      - generic [ref=e35]:
        - generic [ref=e36]:
          - link [ref=e37] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=e40] [cursor=pointer]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=e43] [cursor=pointer]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=e46] [cursor=pointer]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=e49]:
          - paragraph [ref=e50]: OrangeHRM OS 5.9
          - paragraph [ref=e51]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=e52] [cursor=pointer]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - img "orangehrm-logo" [ref=e54]
```

# Test source

```ts
  1  | import {Page, test, expect, Locator} from '@playwright/test';
  2  | 
  3  | 
  4  | export class ProductUtils{
  5  |     page:Page;
  6  |     constructor(page:Page)
  7  |     {
  8  |         this.page=page;
  9  |     }
  10 | 
  11 |     async clickOnLeftPanelTab(tabName : string)
  12 |     {
  13 |         console.log(`Click on ${tabName} tab in left panel.`);
  14 |         const adminClick = this.page.locator(`//span[text()='${tabName}']`);
  15 |         await adminClick.click();
  16 |     }
  17 | 
  18 |     async clickOnButton(buttonName : string)
  19 |     {
  20 |         await this.page.getByRole('button',{name:`${buttonName}`}).click();
  21 |     }
  22 | 
  23 |     async enterDataInTextFeild(textFieldName : string , value : string)
  24 |     {
> 25 |         await this.page.getByLabel(`${textFieldName}`).fill(`${value}`);
     |                                                        ^ Error: locator.fill: Target page, context or browser has been closed
  26 |     }
  27 | 
  28 | }
```