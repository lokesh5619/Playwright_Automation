import {test,expect,Page} from '@playwright/test';
import { LoginPage } from '../../Pages/LoginPage';
import { Test_Configu, UserDetails } from '../../Config/test-config';
import { AdminPage } from '../../Pages/AdminPage';
import { LeftPanelPage } from '../../Pages/LeftPanelPage';
import { ProfileIcon } from '../../Pages/ProfileIcon';

test.describe.serial('OrangeHRM',()=>{
    
    let page:Page;
    let adminPanel:AdminPage;
    // let adminpanel:AdminPage;
    
    test.beforeAll(async({browser})=>{
        const context =await browser.newContext();
        page=await context.newPage();
        
        await page.goto(Test_Configu.baseURL);
        await page.waitForLoadState('networkidle');
        await expect(page.getByRole('heading',{name:'Login',exact:true})).toBeVisible();

        const loginPage = new LoginPage(page);
        await loginPage.enterUserName(Test_Configu.username);
        
        await loginPage.enterUserPassword(Test_Configu.password);
        
        await loginPage.clickOnLoginButton();
        await expect(page).toHaveURL(/dashboard/);
        await page.waitForTimeout(5000);
        
    })
    
    test.beforeEach(async({})=>{
        console.log("<------ Test Start ------>");
    })

    
    test('TC-01 | ADD USER',async({})=>{
        adminPanel = new AdminPage(page);
        const leftPanel = new LeftPanelPage(page);
        await leftPanel.clickOnAdmin();
         
        await adminPanel.clickOnAddButton();
        await page.waitForTimeout(2000);
        
        await adminPanel.selectUserRoleInAdminPanel_ADD();
        // await expect(page.getByRole('option',{name:'Admin'})).toBeVisible();
        await page.waitForTimeout(2000);
        
        await adminPanel.selectEmployeeNameInAdminPanel_ADD();
        await page.waitForTimeout(2000);
        
        await adminPanel.selectStatusInAdminPanel_ADD();
        await page.waitForTimeout(2000);
        
        await adminPanel.enterUserNameInAdminPanel_ADD();
        // await expect(page.getByText(UserDetails.usernameIn_ADD)).toBeVisible();
        await page.waitForTimeout(2000);
    
        await adminPanel.enterPasswordInAdmin_ADD();
        // await expect(page.getByText(UserDetails.passwordIn_ADD)).toBeVisible();
        await page.waitForTimeout(2000);
        
        await adminPanel.enterConfirmPasswordInAdminPanel_ADD();
        // await expect(page.getByText(UserDetails.passwordIn_ADD)).toBeVisible();
        await page.waitForTimeout(2000);
        
        await expect(page.getByRole('button',{name:'Save'})).toBeVisible();
        await adminPanel.clickOnSaveButtonInAdminPanel_ADD();
        await page.waitForTimeout(10000);

        console.log("<-------------- ADD DONE ---------------->");
    });

    test('TC-02 | SEARCH USER',async({})=>{

        
        await adminPanel.enterUserNameToSearchUserInAdminPanel_SEARCH();
        await page.waitForTimeout(2000);
        
        await adminPanel.clickOnSearchButtonToSearchUserInAdminPanel_SEARCH();
        await page.waitForTimeout(2000);
        
        console.log("<------------- SEARCH DONE -------------->");
    });
    
    test('TC-03 | UPDATE USER',async({})=>{

        
        await adminPanel.clickOnUpdateIconInAdminPanel_UPDATE();
        await page.waitForTimeout(5000);
        
        await adminPanel.updateUserNameInAdminPanel_UPDATE();
        await page.waitForTimeout(2000);
    
        await adminPanel.clickOnSaveButtonToSaveUserDetailsInAdminPanel_UPDATE();
        await page.waitForTimeout(5000);
        
        console.log("<------------- UPDATE DONE --------------->");
        
    });

    test('TC-04 | DELETE USER',async({})=>{

        await adminPanel.enterUserNameToSearchUserInAdminPanel_DELETE();
        await page.waitForTimeout(2000);
        
        await adminPanel.clickOnSearchButtonInAdminPanel_DELETE();
        await page.waitForTimeout(2000);
        
        await adminPanel.clickOnDeleteIconInAdminPanel_DELETE();
        await page.waitForTimeout(2000);
        
        await adminPanel.userDeleteSuccessfullyInAdminPanel_DELETE();
        await page.waitForTimeout(2000);
        
        console.log("<------------- DELETE DONE --------------->");
    })
        
        test.afterEach(async({})=>{
        console.log("<------ Test End ------>");
    })
    
    test.afterAll(async({})=>{
        const selectProfileOption = new ProfileIcon(page);
        await selectProfileOption.clickOnProfileIcon();
        await selectProfileOption.clickOnLogout();
    })
})