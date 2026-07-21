import {test , expect , Locator } from "@playwright/test";
import { Test_Configu, UserDetails } from "../Config/test-config";
import { BaseSetup } from "../Base/BaseSetup";
import { AdminPage } from "../Pages/AdminPage";
import { LeftPanelPage } from "../Pages/LeftPanelPage"; 
import { feature, story, severity, label, step } from 'allure-js-commons';


class AdminHRM2Test extends BaseSetup
{
    override defineTest(): void {
        
        
        test.describe.serial('AdminHRM',()=>{
            
            let adminPanel:AdminPage;

            test('TC-01 | ADD USER',async({})=>{

                await feature('User Management');
                await story('Add User');
                await severity('critical');

                const leftPanel = new LeftPanelPage(this.page);
                await leftPanel.clickOnAdmin();

                adminPanel = new AdminPage(this.page);
                await adminPanel.clickOnAddButton();
                await this.page.waitForTimeout(2000);
                await adminPanel.selectUserRoleInAdminPanel_ADD();
                await this.page.waitForTimeout(2000);
                await adminPanel.selectEmployeeNameInAdminPanel_ADD();
                await this.page.waitForTimeout(2000);
                await adminPanel.selectStatusInAdminPanel_ADD();
                await this.page.waitForTimeout(2000);
                await adminPanel.enterUserNameInAdminPanel_ADD();
                await this.page.waitForTimeout(2000);
                await adminPanel.enterPasswordInAdmin_ADD();
                await this.page.waitForTimeout(2000);
                await adminPanel.enterConfirmPasswordInAdminPanel_ADD();
                await this.page.waitForTimeout(2000);
                await adminPanel.clickOnSaveButtonInAdminPanel_ADD();
                await this.page.waitForTimeout(7000);
            })
            test('TC-02 | SEARCH USER',async({})=>{
                
                await adminPanel.enterUserNameToSearchUserInAdminPanel_SEARCH();
                await this.page.waitForTimeout(2000);
                await adminPanel.clickOnSearchButtonToSearchUserInAdminPanel_SEARCH();
                await this.page.waitForTimeout(2000);
            })
            test('TC-03 | UPDATE USER',async({})=>{
                
                await adminPanel.clickOnUpdateIconInAdminPanel_UPDATE();
                await this.page.waitForTimeout(5000);
                await adminPanel.updateUserNameInAdminPanel_UPDATE();
                await this.page.waitForTimeout(2000);
                await adminPanel.clickOnSaveButtonToSaveUserDetailsInAdminPanel_UPDATE();
                await this.page.waitForTimeout(5000);
            })
            test('TC-04 | DELETE USER',async({})=>{
                
                await adminPanel.enterUserNameToSearchUserInAdminPanel_DELETE();
                await this.page.waitForTimeout(2000);
                await adminPanel.clickOnSearchButtonInAdminPanel_DELETE();
                await this.page.waitForTimeout(2000);
                await adminPanel.clickOnDeleteIconInAdminPanel_DELETE();
                await this.page.waitForTimeout(2000);
                await adminPanel.userDeleteSuccessfullyInAdminPanel_DELETE();
                await this.page.waitForTimeout(2000);
            })

        })
    }
}

new AdminHRM2Test().register();
