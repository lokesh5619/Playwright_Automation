import {test,expect,Page} from '@playwright/test';
import { LoginPage } from '../../Pages/LoginPage';
import { Test_Configu } from '../../Config/test-config';
import { AdminPage } from '../../Pages/AdminPage';
import { LeftPanel } from '../../Pages/LeftPanelPage';
import { ProfileIcon } from '../../Pages/ProfileIcon';

test.describe.serial('OrangeHRM',()=>{
    
    let page:Page;
    // let adminpanel:AdminPage;

    test.beforeAll(async({browser})=>{
        const context =await browser.newContext();
        page=await context.newPage();
        
        await page.goto(Test_Configu.baseURL);
        await page.waitForLoadState('networkidle');

        const loginPage = new LoginPage(page);
        await loginPage.enterUserName(Test_Configu.username);
        await loginPage.enterUserPassword(Test_Configu.password);
        await loginPage.clickOnLoginButton();
        
        await page.waitForTimeout(5000);
    })
    
    test.beforeEach(async({})=>{
        console.log("<------ Test Start ------>");
    })

    
    test('TC-01 | ADMIN PANEL',async({})=>{

        const leftPanel = new LeftPanel(page);
        await leftPanel.clickOnAdmin();

        const adminPanel = new AdminPage(page);
        
        await adminPanel.clickOnAddButton();
        await page.waitForTimeout(2000);
        
        await adminPanel.selectUserRoleInAdminPanel_ADD();
        await page.waitForTimeout(2000);
        
        await adminPanel.selectEmployeeNameInAdminPanel_ADD();
        await page.waitForTimeout(2000);
        
        await adminPanel.selectStatusInAdminPanel_ADD();
        await page.waitForTimeout(2000);
        
        await adminPanel.enterUserNameInAdminPanel_ADD();
        await page.waitForTimeout(2000);
    
        await adminPanel.enterPasswordInAdmin_ADD();
        await page.waitForTimeout(2000);
    
        await adminPanel.enterConfirmPasswordInAdminPanel_ADD();
        await page.waitForTimeout(2000);
        
        await adminPanel.clickOnSaveButtonInAdminPanel_ADD();
        await page.waitForTimeout(10000);
        
        console.log("<-------------- ADD DONE ---------------->");
        
        await adminPanel.enterUserNameToSearchUserInAdminPanel_SEARCH();
        await page.waitForTimeout(2000);
        
        await adminPanel.clickOnSearchButtonToSearchUserInAdminPanel_SEARCH();
        await page.waitForTimeout(2000);
        
        console.log("<------------- SEARCH DONE -------------->");
        
        await adminPanel.clickOnUpdateIconInAdminPanel_UPDATE();
        await page.waitForTimeout(5000);
    
        await adminPanel.updateUserNameInAdminPanel_UPDATE();
        await page.waitForTimeout(2000);
    
        await adminPanel.clickOnSaveButtonToSaveUserDetailsInAdminPanel_UPDATE();
        await page.waitForTimeout(5000);
        
        console.log("<------------- UPDATE DONE --------------->");
        
        await adminPanel.enterUserNameToSearchUserInAdminPanel_DELETE();
        await page.waitForTimeout(2000);
        
        await adminPanel.clickOnSearchButtonInAdminPanel_DELETE();
        await page.waitForTimeout(2000);
        
        await adminPanel.clickOnDeleteIconInAdminPanel_DELETE();
        await page.waitForTimeout(2000);
        
        await adminPanel.userDeleteSuccessfullyInAdminPanel_DELETE();
        await page.waitForTimeout(2000);
        
        console.log("<------------- DELETE DONE --------------->");
    });
    
    test.afterEach(async({})=>{
        console.log("<------ Test End ------>");
    })
    
    test.afterAll(async({})=>{
        const selectProfileOption = new ProfileIcon(page);
        await selectProfileOption.clickOnLogout();
    })
})