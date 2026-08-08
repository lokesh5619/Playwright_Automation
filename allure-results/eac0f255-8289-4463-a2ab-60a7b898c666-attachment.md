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
              - textbox [ref=e176]
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
            - button "Search" [ref=e208] [cursor=pointer]
      - generic [ref=e209]:
        - button " Add" [ref=e211] [cursor=pointer]:
          - generic [ref=e212]: 
          - text: Add
        - generic [ref=e213]:
          - separator [ref=e214]
          - generic [ref=e216]: (9) Records Found
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
            - row " Admin Admin Daisy Nguyen Enabled  " [ref=e242]:
              - cell "" [ref=e243]:
                - generic [ref=e247]:
                  - checkbox "" [ref=e248]
                  - generic [ref=e250]: 
              - cell "Admin" [ref=e251]:
                - generic [ref=e252]: Admin
              - cell "Admin" [ref=e253]:
                - generic [ref=e254]: Admin
              - cell "Daisy Nguyen" [ref=e255]:
                - generic [ref=e256]: Daisy Nguyen
              - cell "Enabled" [ref=e257]:
                - generic [ref=e258]: Enabled
              - cell " " [ref=e259]:
                - generic [ref=e260]:
                  - button "" [ref=e261] [cursor=pointer]:
                    - generic [ref=e262]: 
                  - button "" [ref=e263] [cursor=pointer]:
                    - generic [ref=e264]: 
            - row " claudeqa.1785662507133 Admin Daisy Nguyen Enabled  " [ref=e266]:
              - cell "" [ref=e267]:
                - generic [ref=e270] [cursor=pointer]:
                  - checkbox "" [ref=e271]
                  - generic [ref=e273]: 
              - cell "claudeqa.1785662507133" [ref=e274]:
                - generic [ref=e275]: claudeqa.1785662507133
              - cell "Admin" [ref=e276]:
                - generic [ref=e277]: Admin
              - cell "Daisy Nguyen" [ref=e278]:
                - generic [ref=e279]: Daisy Nguyen
              - cell "Enabled" [ref=e280]:
                - generic [ref=e281]: Enabled
              - cell " " [ref=e282]:
                - generic [ref=e283]:
                  - button "" [ref=e284] [cursor=pointer]:
                    - generic [ref=e285]: 
                  - button "" [ref=e286] [cursor=pointer]:
                    - generic [ref=e287]: 
            - row " claudeqa.1785662697877 Admin Remya Appukuttan Enabled  " [ref=e289]:
              - cell "" [ref=e290]:
                - generic [ref=e293] [cursor=pointer]:
                  - checkbox "" [ref=e294]
                  - generic [ref=e296]: 
              - cell "claudeqa.1785662697877" [ref=e297]:
                - generic [ref=e298]: claudeqa.1785662697877
              - cell "Admin" [ref=e299]:
                - generic [ref=e300]: Admin
              - cell "Remya Appukuttan" [ref=e301]:
                - generic [ref=e302]: Remya Appukuttan
              - cell "Enabled" [ref=e303]:
                - generic [ref=e304]: Enabled
              - cell " " [ref=e305]:
                - generic [ref=e306]:
                  - button "" [ref=e307] [cursor=pointer]:
                    - generic [ref=e308]: 
                  - button "" [ref=e309] [cursor=pointer]:
                    - generic [ref=e310]: 
            - row " claudeqa.1785662924908 Admin Remya Appukuttan Enabled  " [ref=e312]:
              - cell "" [ref=e313]:
                - generic [ref=e316] [cursor=pointer]:
                  - checkbox "" [ref=e317]
                  - generic [ref=e319]: 
              - cell "claudeqa.1785662924908" [ref=e320]:
                - generic [ref=e321]: claudeqa.1785662924908
              - cell "Admin" [ref=e322]:
                - generic [ref=e323]: Admin
              - cell "Remya Appukuttan" [ref=e324]:
                - generic [ref=e325]: Remya Appukuttan
              - cell "Enabled" [ref=e326]:
                - generic [ref=e327]: Enabled
              - cell " " [ref=e328]:
                - generic [ref=e329]:
                  - button "" [ref=e330] [cursor=pointer]:
                    - generic [ref=e331]: 
                  - button "" [ref=e332] [cursor=pointer]:
                    - generic [ref=e333]: 
            - row " glong123 ESS glong123 glong123 Enabled  " [ref=e335]:
              - cell "" [ref=e336]:
                - generic [ref=e339] [cursor=pointer]:
                  - checkbox "" [ref=e340]
                  - generic [ref=e342]: 
              - cell "glong123" [ref=e343]:
                - generic [ref=e344]: glong123
              - cell "ESS" [ref=e345]:
                - generic [ref=e346]: ESS
              - cell "glong123 glong123" [ref=e347]:
                - generic [ref=e348]: glong123 glong123
              - cell "Enabled" [ref=e349]:
                - generic [ref=e350]: Enabled
              - cell " " [ref=e351]:
                - generic [ref=e352]:
                  - button "" [ref=e353] [cursor=pointer]:
                    - generic [ref=e354]: 
                  - button "" [ref=e355] [cursor=pointer]:
                    - generic [ref=e356]: 
            - row " john123 Admin Daisy Nguyen Enabled  " [ref=e358]:
              - cell "" [ref=e359]:
                - generic [ref=e362] [cursor=pointer]:
                  - checkbox "" [ref=e363]
                  - generic [ref=e365]: 
              - cell "john123" [ref=e366]:
                - generic [ref=e367]: john123
              - cell "Admin" [ref=e368]:
                - generic [ref=e369]: Admin
              - cell "Daisy Nguyen" [ref=e370]:
                - generic [ref=e371]: Daisy Nguyen
              - cell "Enabled" [ref=e372]:
                - generic [ref=e373]: Enabled
              - cell " " [ref=e374]:
                - generic [ref=e375]:
                  - button "" [ref=e376] [cursor=pointer]:
                    - generic [ref=e377]: 
                  - button "" [ref=e378] [cursor=pointer]:
                    - generic [ref=e379]: 
            - row " preeti.shukla ESS Preeti Shukla Enabled  " [ref=e381]:
              - cell "" [ref=e382]:
                - generic [ref=e385] [cursor=pointer]:
                  - checkbox "" [ref=e386]
                  - generic [ref=e388]: 
              - cell "preeti.shukla" [ref=e389]:
                - generic [ref=e390]: preeti.shukla
              - cell "ESS" [ref=e391]:
                - generic [ref=e392]: ESS
              - cell "Preeti Shukla" [ref=e393]:
                - generic [ref=e394]: Preeti Shukla
              - cell "Enabled" [ref=e395]:
                - generic [ref=e396]: Enabled
              - cell " " [ref=e397]:
                - generic [ref=e398]:
                  - button "" [ref=e399] [cursor=pointer]:
                    - generic [ref=e400]: 
                  - button "" [ref=e401] [cursor=pointer]:
                    - generic [ref=e402]: 
            - row " qauser164536 ESS QAFirst164536 QALast164536 Enabled  " [ref=e404]:
              - cell "" [ref=e405]:
                - generic [ref=e408] [cursor=pointer]:
                  - checkbox "" [ref=e409]
                  - generic [ref=e411]: 
              - cell "qauser164536" [ref=e412]:
                - generic [ref=e413]: qauser164536
              - cell "ESS" [ref=e414]:
                - generic [ref=e415]: ESS
              - cell "QAFirst164536 QALast164536" [ref=e416]:
                - generic [ref=e417]: QAFirst164536 QALast164536
              - cell "Enabled" [ref=e418]:
                - generic [ref=e419]: Enabled
              - cell " " [ref=e420]:
                - generic [ref=e421]:
                  - button "" [ref=e422] [cursor=pointer]:
                    - generic [ref=e423]: 
                  - button "" [ref=e424] [cursor=pointer]:
                    - generic [ref=e425]: 
            - row " qauser289884 ESS QAFirst289884 QALast289884 Enabled  " [ref=e427]:
              - cell "" [ref=e428]:
                - generic [ref=e431] [cursor=pointer]:
                  - checkbox "" [ref=e432]
                  - generic [ref=e434]: 
              - cell "qauser289884" [ref=e435]:
                - generic [ref=e436]: qauser289884
              - cell "ESS" [ref=e437]:
                - generic [ref=e438]: ESS
              - cell "QAFirst289884 QALast289884" [ref=e439]:
                - generic [ref=e440]: QAFirst289884 QALast289884
              - cell "Enabled" [ref=e441]:
                - generic [ref=e442]: Enabled
              - cell " " [ref=e443]:
                - generic [ref=e444]:
                  - button "" [ref=e445] [cursor=pointer]:
                    - generic [ref=e446]: 
                  - button "" [ref=e447] [cursor=pointer]:
                    - generic [ref=e448]: 
    - generic [ref=e450]:
      - paragraph [ref=e451]: OrangeHRM OS 5.9
      - paragraph [ref=e452]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e453] [cursor=pointer]:
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