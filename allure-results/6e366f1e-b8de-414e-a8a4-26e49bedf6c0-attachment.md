# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Demo\LeftPanelTest.spec.ts >> HRM >> Verify Admin Page Visibility
- Location: tests\Demo\LeftPanelTest.spec.ts:17:18

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://opensource-demo.orangehrmlive.com/Dashboard/"
Received: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
Timeout:  5000ms

Call log:
  - Expect "soft toHaveURL" with timeout 5000ms
    13 × unexpected value "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"

```

```yaml
- img "company-branding"
- heading "Login" [level=5]
- paragraph: "Username : Admin"
- paragraph: "Password : admin123"
- text:  Username
- textbox "Username"
- text:  Password
- textbox "Password"
- button "Login"
- paragraph: Forgot your password?
- link:
  - /url: https://www.linkedin.com/company/orangehrm/mycompany/
- link:
  - /url: https://www.facebook.com/OrangeHRM/
- link:
  - /url: https://twitter.com/orangehrm?lang=en
- link:
  - /url: https://www.youtube.com/c/OrangeHRMInc
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
- img "orangehrm-logo"
```

# Test source

```ts
  1   | import {expect,test , Browser , BrowserContext , Page} from '@playwright/test';
  2   | import { LoginPage } from '../Pages/LoginPage';
  3   | import { Test_Configu } from '../Config/test-config';
  4   | import { ProfileIcon } from '../Pages/ProfileIcon';
  5   | import { attachment } from 'allure-js-commons';
  6   | 
  7   | export class BaseSetup{
  8   | 
  9   |     protected page !: Page;
  10  |     private context !: BrowserContext;
  11  | 
  12  |     register() : void {
  13  |         
  14  |         const self=this;
  15  | 
  16  |         test.beforeAll(async({browser} : {browser : Browser})=>{
  17  |             await self.beforeAll(browser);
  18  |         })
  19  | 
  20  |         test.beforeEach(async()=>{
  21  |             await self.beforeEach();
  22  |         })
  23  | 
  24  |         test.afterEach(async()=>{
  25  |             await self.afterEach();
  26  |         })
  27  | 
  28  |         test.afterAll(async()=>{
  29  |             await self.afterAll();
  30  |         })
  31  | 
  32  |         this.defineTests();
  33  |     }
  34  | 
  35  |     async beforeAll(browser : Browser):Promise<void>{
  36  |         this.context =await  browser.newContext();
  37  |         this.page =await this.context.newPage();
  38  | 
  39  |         await this.page.goto(Test_Configu.baseURL);
  40  |         await this.page.waitForLoadState('networkidle');
> 41  |         await expect.soft(this.page).toHaveURL('/Dashboard/');
      |                                      ^ Error: expect(page).toHaveURL(expected) failed
  42  |         
  43  |         await expect(this.page.locator("//h5[text()='Login']")).toBeVisible();        
  44  |         const loginPage = new LoginPage(this.page);
  45  | 
  46  |         await loginPage.enterUserName(Test_Configu.username);
  47  |         await expect.soft(this.page.locator("input[name=username]")).toHaveValue('Admin');
  48  |         
  49  |         await loginPage.enterUserPassword(Test_Configu.password);
  50  |         await expect(this.page.locator("input[name=password]")).toHaveValue('admin123');
  51  |         
  52  |         await expect(this.page.getByRole('button',{name:'Login'})).toBeVisible();
  53  |         await loginPage.clickOnLoginButton();
  54  |         await this.page.waitForTimeout(5000);
  55  |         
  56  |     }
  57  | 
  58  |     async beforeEach():Promise<void>{
  59  |         console.log('----- Before Each Test Case -----');
  60  |     }
  61  | 
  62  |     async afterEach():Promise<void>{
  63  |         console.log('----- After Each Test Case -----');
  64  |         await this.page.waitForLoadState('domcontentloaded');  // wait for page
  65  |         await this.page.waitForTimeout(1000);                  // small buffer
  66  | 
  67  |         
  68  | 
  69  |   const testInfo = test.info();
  70  | 
  71  |   if (testInfo.status !== testInfo.expectedStatus) {
  72  |     const screenshot = await this.page.screenshot({ fullPage: true });
  73  |     await attachment(`FAILED - ${testInfo.title}`, screenshot, 'image/png');
  74  |   }
  75  | 
  76  |   
  77  |   
  78  |   
  79  |   
  80  |   
  81  |         // const screenshot = await this.page.screenshot({ 
  82  |         //     fullPage: true,
  83  |         //     animations: 'disabled'   // stops animated elements from causing blank frames
  84  |         // });
  85  |   
  86  |         // await attachment('Screenshot', screenshot, 'image/png');
  87  |   
  88  | 
  89  |         // const screenshot = await this.page.screenshot({ fullPage: true });
  90  |         // await attachment('Screenshot', screenshot, 'image/png');
  91  |     }
  92  | 
  93  |     async afterAll():Promise<void>{
  94  |         // const logOut = new ProfileIcon(this.page);
  95  |         // await logOut.clickOnProfileIcon();
  96  |         // await logOut.clickOnLogout();
  97  |         // await this.page.waitForTimeout(5000);
  98  | 
  99  |         // await this.context?.close();
  100 |     }
  101 |     defineTests():void{
  102 | 
  103 |     }
  104 | }
  105 | 
```