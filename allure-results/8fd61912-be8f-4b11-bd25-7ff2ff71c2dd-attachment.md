# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Demo\AdminHRM2Test.spec.ts >> AdminHRM_222 >> TC-04 | DELETE USER
- Location: tests\Demo\AdminHRM2Test.spec.ts:54:18

# Error details

```
TypeError: Cannot read properties of undefined (reading 'locator')
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
          - heading "Dashboard" [level=6] [ref=e114]
        - link "Upgrade" [ref=e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=e117] [cursor=pointer]: Upgrade
        - list [ref=e123]:
          - listitem [ref=e124]:
            - generic [ref=e125] [cursor=pointer]:
              - img "profile picture" [ref=e126]
              - paragraph [ref=e127]: manda user
              - generic [ref=e128]: 
      - navigation "Topbar Menu" [ref=e130]:
        - list [ref=e131]:
          - button "" [ref=e133] [cursor=pointer]:
            - generic [ref=e134]: 
  - generic [ref=e135]:
    - generic [ref=e137]:
      - generic [ref=e139]:
        - generic [ref=e141]:
          - generic [ref=e142]: 
          - paragraph [ref=e143]: Time at Work
        - separator [ref=e144]
        - generic [ref=e146]:
          - generic [ref=e147]:
            - img "profile picture" [ref=e149]
            - generic [ref=e150]:
              - paragraph [ref=e151]: Punched Out
              - paragraph [ref=e152]: "Punched Out: Aug 3rd at 01:20 AM (GMT 7)"
          - generic [ref=e153]:
            - generic [ref=e154]: 1h 27m Today
            - button "" [ref=e155] [cursor=pointer]:
              - generic [ref=e156]: 
          - separator [ref=e157]
          - generic [ref=e158]:
            - generic [ref=e159]:
              - paragraph [ref=e160]: This Week
              - paragraph [ref=e161]: Jul 27 - Aug 02
            - generic [ref=e162]:
              - generic [ref=e163]: 
              - paragraph [ref=e164]: 0h 0m
      - generic [ref=e168]:
        - generic [ref=e170]:
          - generic [ref=e171]: 
          - paragraph [ref=e172]: My Actions
        - separator [ref=e173]
        - generic [ref=e175]:
          - generic [ref=e176]:
            - button [ref=e177] [cursor=pointer]
            - paragraph [ref=e183] [cursor=pointer]: (1) Pending Self Review
          - generic [ref=e184]:
            - button [ref=e185] [cursor=pointer]
            - paragraph [ref=e194] [cursor=pointer]: (1) Candidate to Interview
      - generic [ref=e196]:
        - generic [ref=e198]:
          - generic [ref=e199]: 
          - paragraph [ref=e200]: Quick Launch
        - separator [ref=e201]
        - generic [ref=e203]:
          - generic [ref=e204]:
            - button "Assign Leave" [ref=e205] [cursor=pointer]
            - generic "Assign Leave" [ref=e208]:
              - paragraph [ref=e209]: Assign Leave
          - generic [ref=e210]:
            - button "Leave List" [ref=e211] [cursor=pointer]
            - generic "Leave List" [ref=e218]:
              - paragraph [ref=e219]: Leave List
          - generic [ref=e220]:
            - button "Timesheets" [ref=e221] [cursor=pointer]
            - generic "Timesheets" [ref=e227]:
              - paragraph [ref=e228]: Timesheets
          - generic [ref=e229]:
            - button "Apply Leave" [ref=e230] [cursor=pointer]
            - generic "Apply Leave" [ref=e233]:
              - paragraph [ref=e234]: Apply Leave
          - generic [ref=e235]:
            - button "My Leave" [ref=e236] [cursor=pointer]
            - generic "My Leave" [ref=e241]:
              - paragraph [ref=e242]: My Leave
          - generic [ref=e243]:
            - button "My Timesheet" [ref=e244] [cursor=pointer]
            - generic "My Timesheet" [ref=e247]:
              - paragraph [ref=e248]: My Timesheet
      - generic [ref=e250]:
        - generic [ref=e252]:
          - generic [ref=e253]: 
          - paragraph [ref=e254]: Buzz Latest Posts
        - separator [ref=e255]
        - generic [ref=e257]:
          - generic [ref=e258]:
            - generic [ref=e259] [cursor=pointer]:
              - img "profile picture" [ref=e261]
              - generic [ref=e262]:
                - paragraph [ref=e263]: manda akhil user
                - paragraph [ref=e264]: 2026-03-08 01:09 AM
            - separator [ref=e265]
            - paragraph [ref=e266]: crawl-w8-what-s-on-your-
          - generic [ref=e267]:
            - generic [ref=e268] [cursor=pointer]:
              - img "profile picture" [ref=e270]
              - generic [ref=e271]:
                - paragraph [ref=e272]: manda akhil user
                - paragraph [ref=e273]: 2026-03-08 01:02 AM
            - separator [ref=e274]
            - paragraph [ref=e275]: hallo
          - generic [ref=e276]:
            - generic [ref=e277] [cursor=pointer]:
              - img "profile picture" [ref=e279]
              - generic [ref=e280]:
                - paragraph [ref=e281]: manda akhil user
                - paragraph [ref=e282]: 2020-08-10 10:38 AM
            - separator [ref=e283]
            - paragraph [ref=e284]: "Hi All; Linda has been blessed with a baby boy! Linda: With love, we welcome your dear new baby to this world. Congratulations!"
          - generic [ref=e285]:
            - generic [ref=e286] [cursor=pointer]:
              - img "profile picture" [ref=e288]
              - generic [ref=e289]:
                - paragraph [ref=e290]: Sania Shaheen
                - paragraph [ref=e291]: 2020-08-10 10:38 AM
            - separator [ref=e292]
            - paragraph [ref=e293]: "World Championship: What makes the perfect snooker player? Mark Selby: Robertson has one of the best techniques in the game. It is very, very straight and he fully commits to every single shot he plays. John Higgins: Every shot is repetitive. He always keeps the same technique and cues through the ball bang straight. Barry Hawkins: Robertson is textbook with his grip and has a ramrod solid cue action, delivering it in a straight line. Honourable mentions: Shaun Murphy, Ding Junhui, Jack Lisowski."
          - generic [ref=e294]:
            - generic [ref=e295] [cursor=pointer]:
              - img "profile picture" [ref=e297]
              - generic [ref=e298]:
                - paragraph [ref=e299]: Rebecca Harmony
                - paragraph [ref=e300]: 2020-08-10 10:34 AM
            - separator [ref=e301]
            - paragraph [ref=e302]: Throwback Thursdays!!
            - img [ref=e303]
      - generic [ref=e305]:
        - generic [ref=e306]:
          - paragraph [ref=e311]: Employees on Leave Today
          - generic [ref=e312] [cursor=pointer]: 
        - separator [ref=e313]
        - generic [ref=e315]:
          - img "No Content" [ref=e316]
          - paragraph [ref=e317]: No Employees are on Leave Today
      - generic [ref=e319]:
        - generic [ref=e321]:
          - generic [ref=e322]: 
          - paragraph [ref=e323]: Employee Distribution by Sub Unit
        - separator [ref=e324]
        - list [ref=e329]:
          - listitem [ref=e330] [cursor=pointer]:
            - generic "Administration" [ref=e332]
          - listitem [ref=e333] [cursor=pointer]:
            - generic "Engineering" [ref=e335]
          - listitem [ref=e336] [cursor=pointer]:
            - generic "Human Resources" [ref=e338]
          - listitem [ref=e339] [cursor=pointer]:
            - generic "Client Services" [ref=e341]
          - listitem [ref=e342] [cursor=pointer]:
            - generic "Unassigned" [ref=e344]
      - generic [ref=e346]:
        - generic [ref=e348]:
          - generic [ref=e349]: 
          - paragraph [ref=e350]: Employee Distribution by Location
        - separator [ref=e351]
        - list [ref=e356]:
          - listitem [ref=e357] [cursor=pointer]:
            - generic "Texas R&D" [ref=e359]
          - listitem [ref=e360] [cursor=pointer]:
            - generic "New York Sales Office" [ref=e362]
          - listitem [ref=e363] [cursor=pointer]:
            - generic "Canadian Regional HQ" [ref=e365]
          - listitem [ref=e366] [cursor=pointer]:
            - generic "Unassigned" [ref=e368]
    - generic [ref=e369]:
      - paragraph [ref=e370]: OrangeHRM OS 5.9
      - paragraph [ref=e371]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e372] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | import {Page, test, expect, Locator} from '@playwright/test';
  2  | import {SafeAction2} from './SafeAction2';
  3  | 
  4  | 
  5  | export class ProductUtils extends SafeAction2{
  6  |     // page:Page;
  7  |     // constructor(page:Page)
  8  |     // {
  9  |     //     this.page=page;
  10 |     // }
  11 | 
  12 |     async clickOnLeftPanelTab(tabName : string)
  13 |     {
  14 |         console.log(`Click on ${tabName} tab in left panel.`);
> 15 |         await this.safeClick(this.page.locator(`//span[text()='${tabName}']`));
     |                                        ^ TypeError: Cannot read properties of undefined (reading 'locator')
  16 |     }
  17 | 
  18 |     async clickOnButton(buttonName : string)
  19 |     {
  20 |         await this.safeClick(this.page.getByRole('button',{name:`${buttonName}`}));
  21 |         await this.page.waitForTimeout(8000);
  22 |     }
  23 | 
  24 |     async selectDropDown(dropDownName : string , selectValue : string)
  25 |     {
  26 |         await this.safeClick(this.page.locator(`//label[text()='${dropDownName}']//following::i[1]`))
  27 |         // await this.page.waitForTimeout(2000);
  28 |         await this.safeClick(this.page.locator(`(//label[text()='${dropDownName}']//following::span)[text()='${selectValue}']`));
  29 |     }
  30 |     
  31 |     async selectDropDownByText(dropDown : string , enterOneValue : string , selectIndex : number)
  32 |     {
  33 |         await this.safeFill(this.page.locator(`//label[text()='${dropDown}']//following::input[1]`), enterOneValue);
  34 |         // await this.page.waitForTimeout(5000);
  35 |         await this.safeClick(this.page.locator(`(//label[text()='${dropDown}']//following::div[@role='option'])[${selectIndex}]`));
  36 |         // (//label[text()='Employee Name']//following::div[@role='option'])[1]
  37 |     }
  38 | 
  39 |     async enterDataInTextFeild(textFieldName : string , value : string)
  40 |     {
  41 |         await this.safeFill(this.page.locator(`//label[text()='${textFieldName}']//following::input[1]`),value);
  42 |     }
  43 | 
  44 |     async enterDataByPlaceholder(placeholder : string , value : string)
  45 |     {
  46 |         await this.safeFill(this.page.getByPlaceholder(`${placeholder}`),value)
  47 |     }
  48 | 
  49 | 
  50 |     async validatePageVisibility(headerName: string)
  51 |     {
  52 |       await this.page.waitForTimeout(2000);
  53 |       const isVisible = await this.page.locator(`//h5[text()='${headerName}'] | //h6[text()='${headerName}']`).isVisible();
  54 |       await expect(this.page.locator(`//h5[text()='${headerName}'] | //h6[text()='${headerName}']`)).toBeVisible();
  55 |       console.log(`${headerName} page is visible ${isVisible}` );   // true or false.  
  56 |     }
  57 | 
  58 |     
  59 | 
  60 |     async validateUserVisibility(userName: string): Promise<void> {
  61 |         await this.page.waitForTimeout(2000);
  62 |         await expect(this.page.locator(`//div[text()='${userName}']`)).toBeVisible();
  63 |         console.log(`${userName} is Visible`);
  64 |     }
  65 | 
  66 |     async clickOnCheckBox(checkBoxNumber : number){
  67 |         await this.safeCheck(this.page.locator(`input[type='checkbox'][value='${checkBoxNumber}']`));
  68 |     }
  69 | }
```