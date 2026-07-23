# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Demo\LeftPanelTest.spec.ts >> HRM >> Verify Admin Page Visibility
- Location: tests\Demo\LeftPanelTest.spec.ts:13:17

# Error details

```
Test timeout of 60000ms exceeded.
```

```
"afterAll" hook timeout of 60000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic:
    - complementary [ref=e4]:
      - navigation "Sidepanel" [ref=e5]:
        - generic [ref=e6]:
          - link "client brand banner" [ref=e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=e9]
          - text: 
        - generic [ref=e10]:
          - generic [ref=e11]:
            - generic [ref=e12]:
              - textbox "Search" [ref=e15]
              - button "" [ref=e16] [cursor=pointer]:
                - generic [ref=e17]: 
            - separator [ref=e18]
          - list [ref=e19]:
            - listitem [ref=e20]:
              - link "Admin" [ref=e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
                - generic [ref=e24]: Admin
            - listitem [ref=e25]:
              - link "PIM" [ref=e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
                - generic [ref=e40]: PIM
            - listitem [ref=e41]:
              - link "Leave" [ref=e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
                - generic [ref=e45]: Leave
            - listitem [ref=e46]:
              - link "Time" [ref=e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
                - generic [ref=e53]: Time
            - listitem [ref=e54]:
              - link "Recruitment" [ref=e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
                - generic [ref=e61]: Recruitment
            - listitem [ref=e62]:
              - link "My Info" [ref=e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
                - generic [ref=e69]: My Info
            - listitem [ref=e70]:
              - link "Performance" [ref=e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
                - generic [ref=e79]: Performance
            - listitem [ref=e80]:
              - link "Dashboard" [ref=e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
                - generic [ref=e84]: Dashboard
            - listitem [ref=e85]:
              - link "Directory" [ref=e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
                - generic [ref=e89]: Directory
            - listitem [ref=e90]:
              - link "Maintenance" [ref=e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
                - generic [ref=e95]: Maintenance
            - listitem [ref=e96]:
              - link "Claim" [ref=e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
                - img [ref=e100]
                - generic [ref=e104]: Claim
            - listitem [ref=e105]:
              - link "Buzz" [ref=e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
                - generic [ref=e109]: Buzz
    - banner [ref=e110]:
      - generic [ref=e111]:
        - generic [ref=e112]:
          - text: 
          - generic [ref=e113]:
            - heading "Admin" [level=6] [ref=e114]
            - heading "/ User Management" [level=6] [ref=e115]
        - link "Upgrade" [ref=e117]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=e118] [cursor=pointer]: Upgrade
        - list [ref=e124]:
          - listitem [ref=e125]:
            - generic [ref=e126] [cursor=pointer]:
              - img "profile picture" [ref=e127]
              - paragraph [ref=e128]: taaJRQeYUW user
              - generic [ref=e129]: 
      - navigation "Topbar Menu" [ref=e131]:
        - list [ref=e132]:
          - listitem [ref=e133] [cursor=pointer]:
            - generic [ref=e134]:
              - text: User Management
              - generic [ref=e135]: 
          - listitem [ref=e136] [cursor=pointer]:
            - generic [ref=e137]:
              - text: Job
              - generic [ref=e138]: 
          - listitem [ref=e139] [cursor=pointer]:
            - generic [ref=e140]:
              - text: Organization
              - generic [ref=e141]: 
          - listitem [ref=e142] [cursor=pointer]:
            - generic [ref=e143]:
              - text: Qualifications
              - generic [ref=e144]: 
          - listitem [ref=e145] [cursor=pointer]:
            - link "Nationalities" [ref=e146]:
              - /url: "#"
          - listitem [ref=e147] [cursor=pointer]:
            - link "Corporate Branding" [ref=e148]:
              - /url: "#"
          - listitem [ref=e149] [cursor=pointer]:
            - generic [ref=e150]:
              - text: Configuration
              - generic [ref=e151]: 
          - button "" [ref=e153] [cursor=pointer]:
            - generic [ref=e154]: 
  - generic [ref=e155]:
    - generic [ref=e157]:
      - generic [ref=e158]:
        - generic [ref=e159]:
          - heading "System Users" [level=5] [ref=e161]
          - button "" [ref=e164] [cursor=pointer]:
            - generic [ref=e165]: 
        - separator [ref=e166]
        - generic [ref=e168]:
          - generic [ref=e170]:
            - generic [ref=e172]:
              - generic [ref=e174]: Username
              - textbox [ref=e176]: lokesh_1221
            - generic [ref=e178]:
              - generic [ref=e180]: User Role
              - generic [ref=e183] [cursor=pointer]:
                - generic [ref=e184]: "-- Select --"
                - generic [ref=e186]: 
            - generic [ref=e188]:
              - generic [ref=e190]: Employee Name
              - textbox "Type for hints..." [ref=e194]
            - generic [ref=e196]:
              - generic [ref=e198]: Status
              - generic [ref=e201] [cursor=pointer]:
                - generic [ref=e202]: "-- Select --"
                - generic [ref=e204]: 
          - separator [ref=e205]
          - generic [ref=e206]:
            - button "Reset" [ref=e207] [cursor=pointer]
            - button "Search" [active] [ref=e208] [cursor=pointer]
      - generic [ref=e209]:
        - button " Add" [ref=e211] [cursor=pointer]:
          - generic [ref=e212]: 
          - text: Add
        - generic [ref=e213]:
          - separator [ref=e214]
          - generic [ref=e216]: (1) Record Found
        - table [ref=e218]:
          - rowgroup [ref=e219]:
            - row " Username  User Role  Employee Name  Status  Actions" [ref=e220]:
              - columnheader "" [ref=e221]:
                - generic [ref=e223] [cursor=pointer]:
                  - checkbox "" [ref=e224]
                  - generic [ref=e226]: 
              - columnheader "Username " [ref=e227]:
                - text: Username
                - generic [ref=e228]:
                  - generic [ref=e229] [cursor=pointer]: 
                  - text:  
              - columnheader "User Role " [ref=e230]:
                - text: User Role
                - generic [ref=e231]:
                  - generic [ref=e232] [cursor=pointer]: 
                  - text:  
              - columnheader "Employee Name " [ref=e233]:
                - text: Employee Name
                - generic [ref=e234]:
                  - generic [ref=e235] [cursor=pointer]: 
                  - text:  
              - columnheader "Status " [ref=e236]:
                - text: Status
                - generic [ref=e237]:
                  - generic [ref=e238] [cursor=pointer]: 
                  - text:  
              - columnheader "Actions" [ref=e239]
          - rowgroup [ref=e240]:
            - row " lokesh_1221 Admin babu 10101 Enabled  " [ref=e242]:
              - cell "" [ref=e243]:
                - generic [ref=e246] [cursor=pointer]:
                  - checkbox "" [ref=e247]
                  - generic [ref=e249]: 
              - cell "lokesh_1221" [ref=e250]:
                - generic [ref=e251]: lokesh_1221
              - cell "Admin" [ref=e252]:
                - generic [ref=e253]: Admin
              - cell "babu 10101" [ref=e254]:
                - generic [ref=e255]: babu 10101
              - cell "Enabled" [ref=e256]:
                - generic [ref=e257]: Enabled
              - cell " " [ref=e258]:
                - generic [ref=e259]:
                  - button "" [ref=e260] [cursor=pointer]:
                    - generic [ref=e261]: 
                  - button "" [ref=e262] [cursor=pointer]:
                    - generic [ref=e263]: 
    - generic [ref=e265]:
      - paragraph [ref=e266]: OrangeHRM OS 5.9
      - paragraph [ref=e267]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e268] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
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
> 28  |         test.afterAll(async()=>{
      |              ^ "afterAll" hook timeout of 60000ms exceeded.
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
  60  |         await this.page.waitForTimeout(1000);                  // small buffer
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