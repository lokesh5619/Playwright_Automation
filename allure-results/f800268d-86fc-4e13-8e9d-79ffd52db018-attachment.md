# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Demo\AdminHRM2Test.spec.ts >> AdminHRM_222 >> TC-04 | DELETE USER
- Location: tests\Demo\AdminHRM2Test.spec.ts:53:17

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('//div[text()=\'lokesh\']')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('//div[text()=\'lokesh\']')

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
  - heading "Admin" [level=6]
  - heading "/ User Management" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: Durga pulicherla
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem: User Management 
      - listitem: Job 
      - listitem: Organization 
      - listitem: Qualifications 
      - listitem:
        - link "Nationalities":
          - /url: "#"
      - listitem:
        - link "Corporate Branding":
          - /url: "#"
      - listitem: Configuration 
      - button ""
- heading "System Users" [level=5]
- button ""
- separator
- text: Username
- textbox: lokesh
- text: User Role -- Select --  Employee Name
- textbox "Type for hints..."
- text: Status -- Select -- 
- separator
- button "Reset"
- button "Search"
- button " Add"
- separator
- text: No Records Found
- table:
  - rowgroup:
    - row " Username  User Role  Employee Name  Status  Actions":
      - columnheader "":
        - checkbox ""
        - text: 
      - columnheader "Username "
      - columnheader "User Role "
      - columnheader "Employee Name "
      - columnheader "Status "
      - columnheader "Actions"
  - rowgroup
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
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
  15 |         await this.safeClick(this.page.locator(`//span[text()='${tabName}']`));
  16 |     }
  17 | 
  18 |     async clickOnButton(buttonName : string)
  19 |     {
  20 |         await this.safeClick(this.page.getByRole('button',{name:`${buttonName}`}))
  21 |     }
  22 | 
  23 |     async selectDropDown(dropDownName : string , selectValue : string)
  24 |     {
  25 |         await this.safeClick(this.page.locator(`//label[text()='${dropDownName}']//following::i[1]`))
  26 |         // await this.page.waitForTimeout(2000);
  27 |         await this.safeClick(this.page.locator(`(//label[text()='${dropDownName}']//following::span)[text()='${selectValue}']`));
  28 |     }
  29 |     
  30 |     async selectDropDownByText(dropDown : string , enterOneValue : string , selectIndex : number)
  31 |     {
  32 |         await this.safeFill(this.page.locator(`//label[text()='${dropDown}']//following::input[1]`), enterOneValue);
  33 |         // await this.page.waitForTimeout(5000);
  34 |         await this.safeClick(this.page.locator(`(//label[text()='${dropDown}']//following::div[@role='option'])[${selectIndex}]`));
  35 |         // (//label[text()='Employee Name']//following::div[@role='option'])[1]
  36 |     }
  37 | 
  38 |     async enterDataInTextFeild(textFieldName : string , value : string)
  39 |     {
  40 |         await this.safeFill(this.page.locator(`//label[text()='${textFieldName}']//following::input[1]`),value);
  41 |     }
  42 | 
  43 |     async enterDataByPlaceholder(placeholder : string , value : string)
  44 |     {
  45 |         await this.safeFill(this.page.getByPlaceholder(`${placeholder}`),value)
  46 |     }
  47 | 
  48 | 
  49 | 
  50 |     async validatePageVisibility(headerName: string)
  51 |     {
  52 |     //   await this.page.waitForTimeout(10000);
  53 |       const isVisible = await this.page.locator(`//h5[text()='${headerName}'] | //h6[text()='${headerName}']`).isVisible();
  54 |       await expect(this.page.locator(`//h5[text()='${headerName}'] | //h6[text()='${headerName}']`)).toBeVisible();
  55 |       console.log(`${headerName} page is visible ${isVisible}` );   // true or false.  
  56 |     }
  57 | 
  58 |     
  59 | 
  60 |     async validateUserVisibility(userName: string): Promise<void> {
> 61 |         await expect(this.page.locator(`//div[text()='${userName}']`)).toBeVisible();
     |                                                                        ^ Error: expect(locator).toBeVisible() failed
  62 |         console.log(`${userName} is Visible`);
  63 |     }
  64 | }
```