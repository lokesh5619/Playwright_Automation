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

```
Error: expect(locator).toHaveValue(expected) failed

Locator:  locator('input[name=username]')
Expected: "admin"
Received: "Admin"
Timeout:  5000ms

Call log:
  - Expect "soft toHaveValue" with timeout 5000ms
  - waiting for locator('input[name=username]')
    13 × locator resolved to <input autofocus="" name="username" data-v-1f99f73c="" placeholder="Username" class="oxd-input oxd-input--focus"/>
       - unexpected value "Admin"

```

```yaml
- textbox "Username": Admin
```

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('button', { name: 'Login' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('button', { name: 'Login' })

```

```yaml
- complementary:
  - navigation "Sidepanel":
    - link "client brand banner":
      - /url: https://www.orangehrm.com/
      - img "client brand banner"
    - textbox "Search"
    - button ""
    - separator
    - list:
      - listitem:
        - link "Admin":
          - /url: /web/index.php/admin/viewAdminModule
      - listitem:
        - link "PIM":
          - /url: /web/index.php/pim/viewPimModule
      - listitem:
        - link "Leave":
          - /url: /web/index.php/leave/viewLeaveModule
      - listitem:
        - link "Time":
          - /url: /web/index.php/time/viewTimeModule
      - listitem:
        - link "Recruitment":
          - /url: /web/index.php/recruitment/viewRecruitmentModule
      - listitem:
        - link "My Info":
          - /url: /web/index.php/pim/viewMyDetails
      - listitem:
        - link "Performance":
          - /url: /web/index.php/performance/viewPerformanceModule
      - listitem:
        - link "Dashboard":
          - /url: /web/index.php/dashboard/index
      - listitem:
        - link "Directory":
          - /url: /web/index.php/directory/viewDirectory
      - listitem:
        - link "Maintenance":
          - /url: /web/index.php/maintenance/viewMaintenanceModule
      - listitem:
        - link "Claim":
          - /url: /web/index.php/claim/viewClaimModule
          - img
          - text: Claim
      - listitem:
        - link "Buzz":
          - /url: /web/index.php/buzz/viewBuzz
- banner:
  - heading "Dashboard" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: KirubakaranShrutikaShrutika userCGCG
      - text: 
  - navigation "Topbar Menu":
    - list:
      - button ""
- text: 
- paragraph: Time at Work
- separator
- text: 
- paragraph: My Actions
- separator
- button
- paragraph: (1) Pending Self Review
- button
- paragraph: (1) Candidate to Interview
- text: 
- paragraph: Quick Launch
- separator
- button "Assign Leave"
- paragraph: Assign Leave
- button "Leave List"
- paragraph: Leave List
- button "Timesheets"
- paragraph: Timesheets
- button "Apply Leave"
- paragraph: Apply Leave
- button "My Leave"
- paragraph: My Leave
- button "My Timesheet"
- paragraph: My Timesheet
- text: 
- paragraph: Buzz Latest Posts
- separator
- paragraph: Employees on Leave Today
- text: 
- separator
- text: 
- paragraph: Employee Distribution by Sub Unit
- separator
- text: 
- paragraph: Employee Distribution by Location
- separator
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
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
  41  |         await expect.soft(this.page).toHaveURL('/Dashboard/');
  42  |         
  43  |         await expect(this.page.locator("//h5[text()='Login']")).toBeVisible();        
  44  |         const loginPage = new LoginPage(this.page);
  45  | 
  46  |         await loginPage.enterUserName(Test_Configu.username);
  47  |         await expect.soft(this.page.locator("input[name=username]")).toHaveValue('admin');
  48  |         
  49  |         await loginPage.enterUserPassword(Test_Configu.password);
  50  |         await expect(this.page.locator("input[name=password]")).toHaveValue('admin123');
  51  |         
  52  |         await loginPage.clickOnLoginButton();
> 53  |         await expect(this.page.getByRole('button',{name:'Login'})).toBeVisible();
      |                                                                    ^ Error: expect(locator).toBeVisible() failed
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