# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Demo\AdminHRM2Test.spec.ts >> AdminHRM_222 >> TC-04 | DELETE USER
- Location: tests\Demo\AdminHRM2Test.spec.ts:53:18

# Error details

```
TypeError: Cannot read properties of undefined (reading 'clickOnCheckBox')
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
              - paragraph [ref=e128]: Daisy Nguyen
              - generic [ref=e129]: 
      - navigation "Topbar Menu" [ref=e131]:
        - list [ref=e132]:
          - listitem [ref=e133] [cursor=pointer]:
            - generic [ref=e134]:
              - text: More
              - generic [ref=e135]: 
          - button "" [ref=e137] [cursor=pointer]:
            - generic [ref=e138]: 
  - generic [ref=e139]:
    - generic [ref=e141]:
      - generic [ref=e142]:
        - generic [ref=e143]:
          - heading "System Users" [level=5] [ref=e145]
          - button "" [ref=e148] [cursor=pointer]:
            - generic [ref=e149]: 
        - separator [ref=e150]
        - generic [ref=e152]:
          - generic [ref=e154]:
            - generic [ref=e156]:
              - generic [ref=e158]: Username
              - textbox [ref=e160]
            - generic [ref=e162]:
              - generic [ref=e164]: User Role
              - generic [ref=e167] [cursor=pointer]:
                - generic [ref=e168]: "-- Select --"
                - generic [ref=e170]: 
            - generic [ref=e172]:
              - generic [ref=e174]: Employee Name
              - textbox "Type for hints..." [ref=e178]
            - generic [ref=e180]:
              - generic [ref=e182]: Status
              - generic [ref=e185] [cursor=pointer]:
                - generic [ref=e186]: "-- Select --"
                - generic [ref=e188]: 
          - separator [ref=e189]
          - generic [ref=e190]:
            - button "Reset" [ref=e191] [cursor=pointer]
            - button "Search" [ref=e192] [cursor=pointer]
      - generic [ref=e193]:
        - button " Add" [ref=e195] [cursor=pointer]:
          - generic [ref=e196]: 
          - text: Add
        - generic [ref=e197]:
          - separator [ref=e198]
          - generic [ref=e200]: (9) Records Found
        - table [ref=e202]:
          - rowgroup [ref=e203]:
            - row " Username  User Role  Employee Name  Status  Actions" [ref=e204]:
              - columnheader "" [ref=e205]:
                - generic [ref=e207] [cursor=pointer]:
                  - checkbox "" [ref=e208]
                  - generic [ref=e210]: 
              - columnheader "Username " [ref=e211]:
                - text: Username
                - generic [ref=e212]:
                  - generic [ref=e213] [cursor=pointer]: 
                  - text:  
              - columnheader "User Role " [ref=e214]:
                - text: User Role
                - generic [ref=e215]:
                  - generic [ref=e216] [cursor=pointer]: 
                  - text:  
              - columnheader "Employee Name " [ref=e217]:
                - text: Employee Name
                - generic [ref=e218]:
                  - generic [ref=e219] [cursor=pointer]: 
                  - text:  
              - columnheader "Status " [ref=e220]:
                - text: Status
                - generic [ref=e221]:
                  - generic [ref=e222] [cursor=pointer]: 
                  - text:  
              - columnheader "Actions" [ref=e223]
          - rowgroup [ref=e224]:
            - row " Admin Admin Daisy Nguyen Enabled  " [ref=e226]:
              - cell "" [ref=e227]:
                - generic [ref=e231]:
                  - checkbox "" [ref=e232]
                  - generic [ref=e234]: 
              - cell "Admin" [ref=e235]:
                - generic [ref=e236]: Admin
              - cell "Admin" [ref=e237]:
                - generic [ref=e238]: Admin
              - cell "Daisy Nguyen" [ref=e239]:
                - generic [ref=e240]: Daisy Nguyen
              - cell "Enabled" [ref=e241]:
                - generic [ref=e242]: Enabled
              - cell " " [ref=e243]:
                - generic [ref=e244]:
                  - button "" [ref=e245] [cursor=pointer]:
                    - generic [ref=e246]: 
                  - button "" [ref=e247] [cursor=pointer]:
                    - generic [ref=e248]: 
            - row " claudeqa.1785662507133 Admin Daisy Nguyen Enabled  " [ref=e250]:
              - cell "" [ref=e251]:
                - generic [ref=e254] [cursor=pointer]:
                  - checkbox "" [ref=e255]
                  - generic [ref=e257]: 
              - cell "claudeqa.1785662507133" [ref=e258]:
                - generic [ref=e259]: claudeqa.1785662507133
              - cell "Admin" [ref=e260]:
                - generic [ref=e261]: Admin
              - cell "Daisy Nguyen" [ref=e262]:
                - generic [ref=e263]: Daisy Nguyen
              - cell "Enabled" [ref=e264]:
                - generic [ref=e265]: Enabled
              - cell " " [ref=e266]:
                - generic [ref=e267]:
                  - button "" [ref=e268] [cursor=pointer]:
                    - generic [ref=e269]: 
                  - button "" [ref=e270] [cursor=pointer]:
                    - generic [ref=e271]: 
            - row " claudeqa.1785662697877 Admin Remya Appukuttan Enabled  " [ref=e273]:
              - cell "" [ref=e274]:
                - generic [ref=e277] [cursor=pointer]:
                  - checkbox "" [ref=e278]
                  - generic [ref=e280]: 
              - cell "claudeqa.1785662697877" [ref=e281]:
                - generic [ref=e282]: claudeqa.1785662697877
              - cell "Admin" [ref=e283]:
                - generic [ref=e284]: Admin
              - cell "Remya Appukuttan" [ref=e285]:
                - generic [ref=e286]: Remya Appukuttan
              - cell "Enabled" [ref=e287]:
                - generic [ref=e288]: Enabled
              - cell " " [ref=e289]:
                - generic [ref=e290]:
                  - button "" [ref=e291] [cursor=pointer]:
                    - generic [ref=e292]: 
                  - button "" [ref=e293] [cursor=pointer]:
                    - generic [ref=e294]: 
            - row " claudeqa.1785662924908 Admin Remya Appukuttan Enabled  " [ref=e296]:
              - cell "" [ref=e297]:
                - generic [ref=e300] [cursor=pointer]:
                  - checkbox "" [ref=e301]
                  - generic [ref=e303]: 
              - cell "claudeqa.1785662924908" [ref=e304]:
                - generic [ref=e305]: claudeqa.1785662924908
              - cell "Admin" [ref=e306]:
                - generic [ref=e307]: Admin
              - cell "Remya Appukuttan" [ref=e308]:
                - generic [ref=e309]: Remya Appukuttan
              - cell "Enabled" [ref=e310]:
                - generic [ref=e311]: Enabled
              - cell " " [ref=e312]:
                - generic [ref=e313]:
                  - button "" [ref=e314] [cursor=pointer]:
                    - generic [ref=e315]: 
                  - button "" [ref=e316] [cursor=pointer]:
                    - generic [ref=e317]: 
            - row " glong123 ESS glong123 glong123 Enabled  " [ref=e319]:
              - cell "" [ref=e320]:
                - generic [ref=e323] [cursor=pointer]:
                  - checkbox "" [ref=e324]
                  - generic [ref=e326]: 
              - cell "glong123" [ref=e327]:
                - generic [ref=e328]: glong123
              - cell "ESS" [ref=e329]:
                - generic [ref=e330]: ESS
              - cell "glong123 glong123" [ref=e331]:
                - generic [ref=e332]: glong123 glong123
              - cell "Enabled" [ref=e333]:
                - generic [ref=e334]: Enabled
              - cell " " [ref=e335]:
                - generic [ref=e336]:
                  - button "" [ref=e337] [cursor=pointer]:
                    - generic [ref=e338]: 
                  - button "" [ref=e339] [cursor=pointer]:
                    - generic [ref=e340]: 
            - row " john123 Admin Daisy Nguyen Enabled  " [ref=e342]:
              - cell "" [ref=e343]:
                - generic [ref=e346] [cursor=pointer]:
                  - checkbox "" [ref=e347]
                  - generic [ref=e349]: 
              - cell "john123" [ref=e350]:
                - generic [ref=e351]: john123
              - cell "Admin" [ref=e352]:
                - generic [ref=e353]: Admin
              - cell "Daisy Nguyen" [ref=e354]:
                - generic [ref=e355]: Daisy Nguyen
              - cell "Enabled" [ref=e356]:
                - generic [ref=e357]: Enabled
              - cell " " [ref=e358]:
                - generic [ref=e359]:
                  - button "" [ref=e360] [cursor=pointer]:
                    - generic [ref=e361]: 
                  - button "" [ref=e362] [cursor=pointer]:
                    - generic [ref=e363]: 
            - row " preeti.shukla ESS Preeti Shukla Enabled  " [ref=e365]:
              - cell "" [ref=e366]:
                - generic [ref=e369] [cursor=pointer]:
                  - checkbox "" [ref=e370]
                  - generic [ref=e372]: 
              - cell "preeti.shukla" [ref=e373]:
                - generic [ref=e374]: preeti.shukla
              - cell "ESS" [ref=e375]:
                - generic [ref=e376]: ESS
              - cell "Preeti Shukla" [ref=e377]:
                - generic [ref=e378]: Preeti Shukla
              - cell "Enabled" [ref=e379]:
                - generic [ref=e380]: Enabled
              - cell " " [ref=e381]:
                - generic [ref=e382]:
                  - button "" [ref=e383] [cursor=pointer]:
                    - generic [ref=e384]: 
                  - button "" [ref=e385] [cursor=pointer]:
                    - generic [ref=e386]: 
            - row " qauser164536 ESS QAFirst164536 QALast164536 Enabled  " [ref=e388]:
              - cell "" [ref=e389]:
                - generic [ref=e392] [cursor=pointer]:
                  - checkbox "" [ref=e393]
                  - generic [ref=e395]: 
              - cell "qauser164536" [ref=e396]:
                - generic [ref=e397]: qauser164536
              - cell "ESS" [ref=e398]:
                - generic [ref=e399]: ESS
              - cell "QAFirst164536 QALast164536" [ref=e400]:
                - generic [ref=e401]: QAFirst164536 QALast164536
              - cell "Enabled" [ref=e402]:
                - generic [ref=e403]: Enabled
              - cell " " [ref=e404]:
                - generic [ref=e405]:
                  - button "" [ref=e406] [cursor=pointer]:
                    - generic [ref=e407]: 
                  - button "" [ref=e408] [cursor=pointer]:
                    - generic [ref=e409]: 
            - row " qauser289884 ESS QAFirst289884 QALast289884 Enabled  " [ref=e411]:
              - cell "" [ref=e412]:
                - generic [ref=e415] [cursor=pointer]:
                  - checkbox "" [ref=e416]
                  - generic [ref=e418]: 
              - cell "qauser289884" [ref=e419]:
                - generic [ref=e420]: qauser289884
              - cell "ESS" [ref=e421]:
                - generic [ref=e422]: ESS
              - cell "QAFirst289884 QALast289884" [ref=e423]:
                - generic [ref=e424]: QAFirst289884 QALast289884
              - cell "Enabled" [ref=e425]:
                - generic [ref=e426]: Enabled
              - cell " " [ref=e427]:
                - generic [ref=e428]:
                  - button "" [ref=e429] [cursor=pointer]:
                    - generic [ref=e430]: 
                  - button "" [ref=e431] [cursor=pointer]:
                    - generic [ref=e432]: 
    - generic [ref=e434]:
      - paragraph [ref=e435]: OrangeHRM OS 5.9
      - paragraph [ref=e436]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e437] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | import {test , expect , Locator } from "@playwright/test";
  2  | import { Test_Configu, UserDetails } from "../Config/test-config";
  3  | import { BaseSetup } from "../Base/BaseSetup";
  4  | import { AdminPage } from "../Pages/AdminPage";
  5  | import { LeftPanelPage } from "../Pages/LeftPanelPage";
  6  | // import { feature, story, severity, label, step } from 'allure-js-commons';
  7  | import { AdminPage2 } from "../Pages/AdminPage2";
  8  | 
  9  | 
  10 | class AdminHRM2Test extends BaseSetup
  11 | {
  12 |     override defineTests(): void {
  13 |         
  14 |         
  15 |         test.describe.serial('AdminHRM_222',()=>{
  16 |             
  17 |             let adminPanel:AdminPage2;
  18 | 
  19 |                 test('TC-01 | ADD USER',async({})=>{
  20 | 
  21 |                 // await feature('User Management');
  22 |                 // await story('Add User');
  23 |                 // await severity('critical');
  24 | 
  25 |                 const leftPanel = new LeftPanelPage(this.page);
  26 |                 await leftPanel.clickOnAdmin();
  27 |                 
  28 |                 adminPanel = new AdminPage2(this.page);
  29 |                 await adminPanel.validatePageVisibility('Admin');
  30 |                 await adminPanel.clickOnAddButton();
  31 |                 await adminPanel.validatePageVisibility('Add User');
  32 |                 await adminPanel.selectUserRoleInAdminPanel_ADD();
  33 |                 await adminPanel.selectEmployeeNameInAdminPanel_ADD();
  34 |                 await adminPanel.selectStatusInAdminPanel_ADD();
  35 |                 await adminPanel.enterUserNameInAdminPanel_ADD();
  36 |                 await adminPanel.enterPasswordInAdmin_ADD();
  37 |                 await adminPanel.enterConfirmPasswordInAdminPanel_ADD();
  38 |                 await adminPanel.clickOnSaveButtonInAdminPanel_ADD();
  39 |                 await adminPanel.validatePageVisibility('System Users');
  40 |             })
  41 |             test('TC-02 | SEARCH USER',async({})=>{
  42 |                 await adminPanel.enterUserNameToSearchUserInAdminPanel_SEARCH();
  43 |                 await adminPanel.clickOnSearchButtonToSearchUserInAdminPanel_SEARCH();
  44 |                 await adminPanel.validateUserVisibility(UserDetails.usernameIn_ADD);
  45 |             })
  46 |             test('TC-03 | UPDATE USER',async({})=>{
  47 |                 await adminPanel.clickOnUpdateIconInAdminPanel_UPDATE();
  48 |                 await adminPanel.validatePageVisibility('Edit User');
  49 |                 await adminPanel.updateUserNameInAdminPanel_UPDATE();
  50 |                 await adminPanel.clickOnSaveButtonToSaveUserDetailsInAdminPanel_UPDATE();
  51 |                 await adminPanel.validatePageVisibility('System Users');
  52 |             })
  53 |             test.only('TC-04 | DELETE USER',async({})=>{
  54 |                 const leftPanel = new LeftPanelPage(this.page);
  55 |                 await leftPanel.clickOnAdmin();
  56 |                 await this.page.waitForTimeout(5000);
> 57 |                 await adminPanel.clickOnCheckBox(3);
     |                                  ^ TypeError: Cannot read properties of undefined (reading 'clickOnCheckBox')
  58 |                 // await adminPanel.enterUserNameToSearchUserInAdminPanel_DELETE();
  59 |                 // await adminPanel.clickOnSearchButtonInAdminPanel_DELETE();
  60 |                 // await adminPanel.validateUserVisibility(UserDetails.updateName);
  61 |                 // await adminPanel.clickOnDeleteIconInAdminPanel_DELETE();
  62 |                 // await adminPanel.userDeleteSuccessfullyInAdminPanel_DELETE();
  63 |             })
  64 | 
  65 |         })
  66 |     }
  67 | }
  68 | 
  69 | new AdminHRM2Test().register();
  70 | 
```