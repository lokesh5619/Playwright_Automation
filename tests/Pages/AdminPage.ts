import {Page , Locator , expect} from '@playwright/test';
import { Test_Configu, UserDetails } from '../Config/test-config';

export class AdminPage
{
    page:Page;
    constructor(page:Page)
    {
        this.page=page;
    }

    async clickOnAddButton()
    {
        console.log("Click on add button to Add user");
        const clickAdd = this.page.locator("[id=app]>div>:last-child>div>div>div:last-child>div>button");
        await expect(this.page.getByRole('button',{name:'Add'})).toBeVisible();
        await clickAdd.click();  
    }

    async selectUserRoleInAdminPanel_ADD()
    {
        console.log("Click on User Role and Select the role-->Admin");
        const clickUserRole = this.page.locator("[class='oxd-form']>div>div>:first-child>div>:last-child>div>div>:last-child");
        await clickUserRole.click();
        const selectUserRole = this.page.locator("[role='listbox']>div:nth-child(2)");
        await selectUserRole.click();
    }

    async selectEmployeeNameInAdminPanel_ADD()
    { 
        console.log("Click on Employee name and Select the name");
        const clickEmployeeName = this.page.locator("[class='oxd-form']>div>div>:nth-child(2)>div>:last-child>div>div>input")
        await clickEmployeeName.fill(UserDetails.employeeName);
        await this.page.waitForTimeout(5000);
        const selectEmployeeType = this.page.locator("[role='listbox']>:nth-child(1)");
        await selectEmployeeType.click();
    }


    async selectStatusInAdminPanel_ADD()
    {
        console.log("Click on Status and Select Status--> Enabled");
        const clickOnStatus = this.page.locator("[class='oxd-form']>div>div>:nth-child(3)>div>:last-child>div>div>:last-child");
        await clickOnStatus.click();
        const selectStatusType = this.page.locator("[role='listbox']>div:nth-child(2)");
        await selectStatusType.click();
    }

    async enterUserNameInAdminPanel_ADD()
    {
        console.log("Click on Username Enter username");
        const enterUserName = this.page.locator("//h6[text()='Add User']//following::input[2]");
        await enterUserName.fill(UserDetails.usernameIn_ADD);
    }

    async enterPasswordInAdmin_ADD()
    {
        console.log("Enter the Password");
        const enterPassword = this.page.locator("(//input[@type='password'])[1]");
        await enterPassword.fill(UserDetails.passwordIn_ADD);
    }

    async enterConfirmPasswordInAdminPanel_ADD()
    {
        console.log("Enter the Confirm Password");
        const enterConfirmPassword = this.page.locator("(//input[@type='password'])[2]");
        await enterConfirmPassword.fill(UserDetails.passwordIn_ADD);
    }

    async clickOnSaveButtonInAdminPanel_ADD()
    {
        console.log("Click on the Save button");
        const clickOnSaveButton = this.page.locator("[type='submit']");
        await clickOnSaveButton.click();
    }
    // <------- ADD DONE --------->



    async enterUserNameToSearchUserInAdminPanel_SEARCH()
    {
        console.log("Search user");
        const enterUserNameToSearch = this.page.locator("//h5[text()='System Users']//following::input[1]");
        await enterUserNameToSearch.fill(UserDetails.usernameIn_ADD);
    }

    async clickOnSearchButtonToSearchUserInAdminPanel_SEARCH()
    {
        console.log("Click on Search button to search user");
        const searchUser = this.page.locator("[type='submit']");
        await searchUser.click();
    }
    // <------ SEARCH DONE ------>



    async clickOnUpdateIconInAdminPanel_UPDATE()
    {
        console.log("Click on Update icon to update user details");
        const clickOnUpdateIcon = this.page.locator("(//button[@type='button']//i)[6]");
        await clickOnUpdateIcon.click();
    }

    async updateUserNameInAdminPanel_UPDATE()
    {
        console.log("Enter username you are changing");
        const updateName = this.page.locator("//h6[text()='Edit User']//following::input[2]");
        await updateName.fill(UserDetails.updateName);
    }

    async clickOnSaveButtonToSaveUserDetailsInAdminPanel_UPDATE()
    {
        console.log("Click on save button to save updates details");
        const clickSaveButton = this.page.locator("//button[@type='submit']");
        await clickSaveButton.click();
    }
    //<------ UPDATE DONE ------>


    async enterUserNameToSearchUserInAdminPanel_DELETE()
    {
        console.log("Enter User name you want to delete");
        const enterUser = this.page.locator("//h5[text()='System Users']//following::input[1]");
        await enterUser.fill(UserDetails.updateName);
    }

    async clickOnSearchButtonInAdminPanel_DELETE()
    {
         
        console.log("Click on Search button ");
        const searchUser = this.page.locator("//button[@type='submit']");
        await searchUser.click();
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