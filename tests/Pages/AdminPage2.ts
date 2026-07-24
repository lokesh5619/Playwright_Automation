import {Page , Locator , expect} from '@playwright/test';
import { Test_Configu, UserDetails } from '../Config/test-config';
import { ProductUtils } from '../Utils/ProductUtils';

export class AdminPage2 extends ProductUtils
{
    // page:Page;
    // constructor(page:Page)
    // {
    //     this.page=page;
    // }

    async clickOnAddButton()
    {
        await this.clickOnButton('Add');
    }

    async selectUserRoleInAdminPanel_ADD()
    {
        await this.selectDropDown('User Role', 'Admin');
    }
    
    async selectEmployeeNameInAdminPanel_ADD()
    {
        await this.selectDropDownByText('Employee Name', UserDetails.employeeName , 2);
    }

    async selectStatusInAdminPanel_ADD()
    {
        await this.selectDropDown('Status','Enabled');
    }
    
    async enterUserNameInAdminPanel_ADD()
    {
        await this.enterDataInTextFeild('Username',UserDetails.usernameIn_ADD);
    }
    
    async enterPasswordInAdmin_ADD()
    {
        await this.enterDataInTextFeild('Password',UserDetails.passwordIn_ADD);
    }
    
    async enterConfirmPasswordInAdminPanel_ADD()
    {
        await this.enterDataInTextFeild('Confirm Password' , UserDetails.passwordIn_ADD);
    }

    async clickOnSaveButtonInAdminPanel_ADD()
    {
        await this.clickOnButton('Save');
    }
    
    // <------- ADD DONE --------->



    async enterUserNameToSearchUserInAdminPanel_SEARCH()
    {
        await this.enterDataInTextFeild('Username',UserDetails.usernameIn_ADD);
    }
    
    async clickOnSearchButtonToSearchUserInAdminPanel_SEARCH()
    {
        await this.clickOnButton('Search');
    }

    // <------ SEARCH DONE ------>

    
    
    async clickOnUpdateIconInAdminPanel_UPDATE()
    {
        console.log("Click on Update icon to update user details");
        const clickOnUpdateIcon = this.page.locator("(//button[@type='button']//i)[6]");
        await clickOnUpdateIcon.click();
    }
    
    async updateUserRoleInAdminPanel_UPDATE()
    {
        await this.selectDropDown('User Role','User');
    }
    
    async updateUserStatusInAdminPanel_UPDATE()
    {
        await this.selectDropDown('Status','Disabled');
    }

    async updateUserNameInAdminPanel_UPDATE()
    {
        await this.enterDataInTextFeild('Username',UserDetails.updateName);
    }
    
    async clickOnSaveButtonToSaveUserDetailsInAdminPanel_UPDATE()
    {
        await this.clickOnButton('Save');
    }
    
    //<------ UPDATE DONE ------>


    
    async enterUserNameToSearchUserInAdminPanel_DELETE()
    {
        await this.enterDataInTextFeild('Username',UserDetails.updateName);
    }
    
    async clickOnSearchButtonInAdminPanel_DELETE()
    {
        await this.clickOnButton('Search');
    }

    async clickOnDeleteIconInAdminPanel_DELETE()
    {
        console.log("Click on Delete icon to delete user detail");
        const clickOnDeleteIcon = this.page.locator("(//button[@type='button']//i)[5]");
        await clickOnDeleteIcon.click();
    }

    async userDeleteSuccessfullyInAdminPanel_DELETE()
    {
        console.log("User deleted succesfully");
        const userDelete = this.page.locator("//button[text()=' Yes, Delete ']");
        await userDelete.click();
    }

    // <------ DELETE DONE ------->
}