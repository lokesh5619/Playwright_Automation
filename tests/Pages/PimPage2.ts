import {Locator , expect, Page} from '@playwright/test';

import { LoginPage } from './LoginPage';
import { LeftPanelPage } from './LeftPanelPage';
import { PIM_Details } from '../Config/test-config';
import { ProductUtils } from '../Utils/ProductUtils';



export class PimPage2 extends ProductUtils{
    // page:Page;
    
    // constructor(page:Page)
    // {
    //     this.page=page;
    // }

    async addProfilePicture_ADD()
    {
        await this.page.locator("//input[@type='file']//following::i").click();
        await this.page.waitForTimeout(3000);
        const imageUpload =  this.page.locator("input[type=file]");
        await imageUpload.setInputFiles("C:\Swing\Image");
        await this.page.waitForTimeout(3000);
    }

    async clickOnAddButtonPimPAnel()
    {
        await this.clickOnButton('Add');
    }
    
    async enterUserFirstName_ADD()
    {
        await this.enterDataByPlaceholder('First Name',PIM_Details.firstName);
    }
    
    async enterUserMiddleName_ADD(middleName : string)
    {
        await this.enterDataByPlaceholder('Middle Name Name', PIM_Details.middlename);
    }
    
    async enterUserLastName_ADD(lastName : string)
    {
        await this.enterDataByPlaceholder('Last Name',PIM_Details.lastName);
    }

    async enterEmployeeId_ADD(employeeId : string)
    {
        await this.enterDataInTextFeild('Employee Id',PIM_Details.employeeId);
    }

    async clickOnSaveButton()
    {
        await this.clickOnButton('Save');
    }
    
    //User Add DONE
    
    async driverLicencenumber(licenceNumber : string)
    {
    }

    async licenseExpiryDate()
    {
        await this.page.locator("//label[text()='License Expiry Date']/parent::div//following-sibling::div//i").click();
        await this.page.waitForTimeout(2000);
        await this.page.locator("//label[text()='License Expiry Date']//parent::div//following::div[4]//button[1]").click();
        await this.page.waitForTimeout(2000);
        await this.page.locator("//div[text()='5']").click();
        await this.page.waitForTimeout(2000);
    }

}