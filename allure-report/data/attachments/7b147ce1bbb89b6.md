# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Demo\AdminHRM2Test.spec.ts >> AdminHRM >> TC-01 | ADD USER
- Location: tests\Demo\AdminHRM2Test.spec.ts:18:17

# Error details

```
"beforeAll" hook timeout of 60000ms exceeded.
```

```
"afterAll" hook timeout of 60000ms exceeded.
```

# Test source

```ts
  1  | import {test , Browser , BrowserContext , Page} from '@playwright/test';
  2  | import { LoginPage } from '../Pages/LoginPage';
  3  | import { Test_Configu } from '../Config/test-config';
  4  | import { ProfileIcon } from '../Pages/ProfileIcon';
  5  | import { attachment } from 'allure-js-commons';
  6  | 
  7  | export class BaseSetup{
  8  | 
  9  |     protected page !: Page;
  10 |     private context !: BrowserContext;
  11 | 
  12 |     register() : void {
  13 |         
  14 |         const self=this;
  15 | 
  16 |         test.beforeAll(async({browser} : {browser : Browser})=>{
  17 |             await self.beforeAll(browser);
  18 |         })
  19 | 
  20 |         test.beforeEach(async()=>{
  21 |             await self.beforeEach();
  22 |         })
  23 | 
  24 |         test.afterEach(async()=>{
  25 |             await self.afterEach();
  26 |         })
  27 | 
> 28 |         test.afterAll(async()=>{
     |              ^ "afterAll" hook timeout of 60000ms exceeded.
  29 |             await self.afterAll();
  30 |         })
  31 | 
  32 |         this.defineTest();
  33 |     }
  34 | 
  35 |     async beforeAll(browser : Browser):Promise<void>{
  36 |         this.context =await  browser.newContext();
  37 |         this.page =await this.context.newPage();
  38 | 
  39 |         await this.page.goto(Test_Configu.baseURL);
  40 |         await this.page.waitForLoadState('networkidle');
  41 |         await this.page.waitForLoadState('networkidle');
  42 |                 
  43 |         const loginPage = new LoginPage(this.page);
  44 |         await loginPage.enterUserName(Test_Configu.username);
  45 |                 
  46 |         await loginPage.enterUserPassword(Test_Configu.password);
  47 |                 
  48 |         await loginPage.clickOnLoginButton();
  49 |         await this.page.waitForTimeout(5000);
  50 |         
  51 |     }
  52 | 
  53 |     async beforeEach():Promise<void>{
  54 |         console.log('----- Before Each Test Case -----');
  55 |     }
  56 | 
  57 |     async afterEach():Promise<void>{
  58 |         console.log('----- After Each Test Case -----');
  59 |         await this.page.waitForLoadState('domcontentloaded');  // wait for page
  60 |         await this.page.waitForTimeout(1000);                  // small buffer
  61 | 
  62 |         const screenshot = await this.page.screenshot({ 
  63 |             fullPage: true,
  64 |             animations: 'disabled'   // stops animated elements from causing blank frames
  65 |         });
  66 |   
  67 |         await attachment('Screenshot', screenshot, 'image/png');
  68 |   
  69 | 
  70 |         // const screenshot = await this.page.screenshot({ fullPage: true });
  71 |         // await attachment('Screenshot', screenshot, 'image/png');
  72 |     }
  73 | 
  74 |     async afterAll():Promise<void>{
  75 |         const logOut = new ProfileIcon(this.page);
  76 |         await logOut.clickOnProfileIcon();
  77 |         await logOut.clickOnLogout();
  78 |         await this.page.waitForTimeout(5000);
  79 | 
  80 |         await this.context?.close();
  81 |     }
  82 |     defineTest():void{
  83 | 
  84 |     }
  85 | }
  86 | 
```