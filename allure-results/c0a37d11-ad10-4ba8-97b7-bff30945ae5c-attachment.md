# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Demo\AdminHRM2Test.spec.ts >> AdminHRM >> TC-01 | ADD USER
- Location: tests\Demo\AdminHRM2Test.spec.ts:19:17

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('xpath=(//label[text()=\'User Role\']//following::div[@role=\'option\'])[Admin]')

```

```
Error: page.waitForTimeout: Target page, context or browser has been closed
```

# Test source

```ts
  1   | import {test , Browser , BrowserContext , Page} from '@playwright/test';
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
  41  |         await this.page.waitForLoadState('networkidle');
  42  |                 
  43  |         const loginPage = new LoginPage(this.page);
  44  |         await loginPage.enterUserName(Test_Configu.username);
  45  |                 
  46  |         await loginPage.enterUserPassword(Test_Configu.password);
  47  |                 
  48  |         await loginPage.clickOnLoginButton();
  49  |         await this.page.waitForTimeout(5000);
  50  |         
  51  |     }
  52  | 
  53  |     async beforeEach():Promise<void>{
  54  |         console.log('----- Before Each Test Case -----');
  55  |     }
  56  | 
  57  |     async afterEach():Promise<void>{
  58  |         console.log('----- After Each Test Case -----');
  59  |         await this.page.waitForLoadState('domcontentloaded');  // wait for page
> 60  |         await this.page.waitForTimeout(1000);                  // small buffer
      |                         ^ Error: page.waitForTimeout: Target page, context or browser has been closed
  61  | 
  62  |         
  63  | 
  64  |   const testInfo = test.info();
  65  | 
  66  |   if (testInfo.status !== testInfo.expectedStatus) {
  67  |     const screenshot = await this.page.screenshot({ fullPage: true });
  68  |     await attachment(`FAILED - ${testInfo.title}`, screenshot, 'image/png');
  69  |   }
  70  | 
  71  |   
  72  |   
  73  |   
  74  |   
  75  |   
  76  |         // const screenshot = await this.page.screenshot({ 
  77  |         //     fullPage: true,
  78  |         //     animations: 'disabled'   // stops animated elements from causing blank frames
  79  |         // });
  80  |   
  81  |         // await attachment('Screenshot', screenshot, 'image/png');
  82  |   
  83  | 
  84  |         // const screenshot = await this.page.screenshot({ fullPage: true });
  85  |         // await attachment('Screenshot', screenshot, 'image/png');
  86  |     }
  87  | 
  88  |     async afterAll():Promise<void>{
  89  |         // const logOut = new ProfileIcon(this.page);
  90  |         // await logOut.clickOnProfileIcon();
  91  |         // await logOut.clickOnLogout();
  92  |         // await this.page.waitForTimeout(5000);
  93  | 
  94  |         // await this.context?.close();
  95  |     }
  96  |     defineTests():void{
  97  | 
  98  |     }
  99  | }
  100 | 
```