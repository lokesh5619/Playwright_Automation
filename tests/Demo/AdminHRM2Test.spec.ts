import {test , expect , Locator } from "@playwright/test";
import { Test_Configu, UserDetails } from "../Config/test-config";
import { BaseSetup } from "../Base/BaseSetup";
import { AdminPage } from "../Pages/AdminPage";
import { LeftPanelPage } from "../Pages/LeftPanelPage";
import { ProductUtils } from "../Utils/ProductUtils";
// import { feature, story, severity, label, step } from 'allure-js-commons';
import { AdminPage2 } from "../Pages/AdminPage2";


class AdminHRM2Test extends BaseSetup
{
    override defineTests(): void {
        
        
        test.describe.serial('AdminHRM_222',()=>{
            
            let adminPanel:AdminPage2;
            let leftPanel:LeftPanelPage;

                test('TC-01 | ADD USER',async({})=>{

                // await feature('User Management');
                // await story('Add User');
                // await severity('critical');

                leftPanel = new LeftPanelPage(this.page);
                await leftPanel.clickOnAdmin();
                
                adminPanel = new AdminPage2(this.page);
                await adminPanel.validatePageVisibility('Admin');
                await adminPanel.clickOnAddButton();
                await adminPanel.validatePageVisibility('Add User');
                await adminPanel.selectUserRoleInAdminPanel_ADD();
                await adminPanel.selectEmployeeNameInAdminPanel_ADD();
                await adminPanel.selectStatusInAdminPanel_ADD();
                await adminPanel.enterUserNameInAdminPanel_ADD();
                await adminPanel.enterPasswordInAdmin_ADD();
                await adminPanel.enterConfirmPasswordInAdminPanel_ADD();
                await adminPanel.clickOnSaveButtonInAdminPanel_ADD();
                await adminPanel.validatePageVisibility('System Users');
            })
            test('TC-02 | SEARCH USER',async({})=>{
                await adminPanel.enterUserNameToSearchUserInAdminPanel_SEARCH();
                await adminPanel.clickOnSearchButtonToSearchUserInAdminPanel_SEARCH();
                await adminPanel.validateUserVisibility(UserDetails.usernameIn_ADD);
            })
            test('TC-03 | UPDATE USER',async({})=>{
                await adminPanel.clickOnUpdateIconInAdminPanel_UPDATE();
                await adminPanel.validatePageVisibility('Edit User');
                await adminPanel.updateUserNameInAdminPanel_UPDATE();
                await adminPanel.clickOnSaveButtonToSaveUserDetailsInAdminPanel_UPDATE();
                await adminPanel.validatePageVisibility('System Users');
            })
            test.only('TC-04 | DELETE USER',async({})=>{
                // leftPanel = new LeftPanelPage(this.page);
                // await leftPanel.clickOnAdmin();
                // adminPanel = new AdminPage2(this.page);
                // await this.page.waitForTimeout(5000);
                // await adminPanel.clickcheckBox();
                await adminPanel.enterUserNameToSearchUserInAdminPanel_DELETE();
                await adminPanel.clickOnSearchButtonInAdminPanel_DELETE();
                await adminPanel.validateUserVisibility(UserDetails.updateName);
                await adminPanel.clickOnDeleteIconInAdminPanel_DELETE();
                await adminPanel.userDeleteSuccessfullyInAdminPanel_DELETE();
            })

        })
    }
}

new AdminHRM2Test().register();
