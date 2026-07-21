import {Locator , expect, Page} from '@playwright/test';

import { LoginPage } from './LoginPage';
import { LeftPanelPage } from './LeftPanelPage';
import { PIM_Details } from '../Config/test-config';



export class PimPage{
    page:Page;
    
    constructor(page:Page)
    {
        this.page=page;
    }

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
        console.log("Click on add button to Add user");
        await this.page.locator("[id=app]>div>:last-child>div>div>div:last-child>div>button").click();
    }

    async enterUserFirstName_ADD(firstName : string)
    {
        await this.page.getByPlaceholder('First Name').fill(firstName);
    }
    
    async enterUserMiddleName_ADD(middleName : string)
    {
        await this.page.getByPlaceholder('Middle Name').fill(middleName);
    }
    
    async enterUserLastName_ADD(lastName : string)
    {
        await this.page.getByPlaceholder('Last Name').fill(lastName);
    }

    async enterEmployeeId_ADD(employeeId : string)
    {
        await this.page.locator("(//label[text()='Employee Id']//following::input)[1]").fill(employeeId);
    }

    async clickOnSaveButton()
    {
        await this.page.locator("button[type=submit]").click();
    }
    
    //User Add DONE
    
    async driverLicencenumber(licenceNumber : string)
    {
        await this.page.locator("").fill(licenceNumber);
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