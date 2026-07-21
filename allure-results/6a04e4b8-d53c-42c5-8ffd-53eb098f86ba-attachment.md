# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Demo\AdminHRM2Test.spec.ts >> AdminHRM >> TC-04 | DELETE USER
- Location: tests\Demo\AdminHRM2Test.spec.ts:61:17

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('//button[text()=\' Yes, Delete \']')
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
  46  |         await selectStatusType.click();
  47  |     }
  48  | 
  49  |     async enterUserNameInAdminPanel_ADD()
  50  |     {
  51  |         console.log("Click on Username Enter username");
  52  |         const enterUserName = this.page.locator("//h6[text()='Add User']//following::input[2]");
  53  |         await enterUserName.fill(UserDetails.usernameIn_ADD);
  54  |     }
  55  | 
  56  |     async enterPasswordInAdmin_ADD()
  57  |     {
  58  |         console.log("Enter the Password");
  59  |         const enterPassword = this.page.locator("(//input[@type='password'])[1]");
  60  |         await enterPassword.fill(UserDetails.passwordIn_ADD);
  61  |     }
  62  | 
  63  |     async enterConfirmPasswordInAdminPanel_ADD()
  64  |     {
  65  |         console.log("Enter the Confirm Password");
  66  |         const enterConfirmPassword = this.page.locator("(//input[@type='password'])[2]");
  67  |         await enterConfirmPassword.fill(UserDetails.passwordIn_ADD);
  68  |     }
  69  | 
  70  |     async clickOnSaveButtonInAdminPanel_ADD()
  71  |     {
  72  |         console.log("Click on the Save button");
  73  |         const clickOnSaveButton = this.page.locator("[type='submit']");
  74  |         await clickOnSaveButton.click();
  75  |     }
  76  |     // <------- ADD DONE --------->
  77  | 
  78  | 
  79  | 
  80  |     async enterUserNameToSearchUserInAdminPanel_SEARCH()
  81  |     {
  82  |         console.log("Search user");
  83  |         const enterUserNameToSearch = this.page.locator("//h5[text()='System Users']//following::input[1]");
  84  |         await enterUserNameToSearch.fill(UserDetails.usernameIn_ADD);
  85  |     }
  86  | 
  87  |     async clickOnSearchButtonToSearchUserInAdminPanel_SEARCH()
  88  |     {
  89  |         console.log("Click on Search button to search user");
  90  |         const searchUser = this.page.locator("[type='submit']");
  91  |         await searchUser.click();
  92  |     }
  93  |     // <------ SEARCH DONE ------>
  94  | 
  95  | 
  96  | 
  97  |     async clickOnUpdateIconInAdminPanel_UPDATE()
  98  |     {
  99  |         console.log("Click on Update icon to update user details");
  100 |         const clickOnUpdateIcon = this.page.locator("(//button[@type='button']//i)[6]");
  101 |         await clickOnUpdateIcon.click();
  102 |     }
  103 | 
  104 |     async updateUserNameInAdminPanel_UPDATE()
  105 |     {
  106 |         console.log("Enter username you are changing");
  107 |         const updateName = this.page.locator("//h6[text()='Edit User']//following::input[2]");
  108 |         await updateName.fill(UserDetails.updateName);
  109 |     }
  110 | 
  111 |     async clickOnSaveButtonToSaveUserDetailsInAdminPanel_UPDATE()
  112 |     {
  113 |         console.log("Click on save button to save updates details");
  114 |         const clickSaveButton = this.page.locator("//button[@type='submit']");
  115 |         await clickSaveButton.click();
  116 |     }
  117 |     //<------ UPDATE DONE ------>
  118 | 
  119 | 
  120 |     async enterUserNameToSearchUserInAdminPanel_DELETE()
  121 |     {
  122 |         console.log("Enter User name you want to delete");
  123 |         const enterUser = this.page.locator("//h5[text()='System Users']//following::input[1]");
  124 |         await enterUser.fill(UserDetails.updateName);
  125 |     }
  126 | 
  127 |     async clickOnSearchButtonInAdminPanel_DELETE()
  128 |     {
  129 |          
  130 |         console.log("Click on Search button ");
  131 |         const searchUser = this.page.locator("//button[@type='submit']");
  132 |         await searchUser.click();
  133 |     }
  134 | 
  135 |     async clickOnDeleteIconInAdminPanel_DELETE()
  136 |     {
  137 |         console.log("Click on Delete icon to delete user detail");
  138 |         const clickOnDeleteIcon = this.page.locator("(//button[@type='button']//i)[5]");
  139 |         await clickOnDeleteIcon.click();
  140 |     }
  141 | 
  142 |     async userDeleteSuccessfullyInAdminPanel_DELETE()
  143 |     {
  144 |         console.log("User deleted succesfully");
  145 |         const userDelete = this.page.locator("//button[text()=' Yes, Delete ']");
> 146 |         await userDelete.click();
      |                          ^ Error: locator.click: Target page, context or browser has been closed
  147 |     }
  148 | 
  149 |     // <------ DELETE DONE ------->
  150 | }
```