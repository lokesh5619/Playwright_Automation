import {Page, test, expect, Locator} from '@playwright/test';


export class ProductUtils{
    page:Page;
    constructor(page:Page)
    {
        this.page=page;
    }

    async clickOnLeftPanelTab(tabName : string)
    {
        console.log(`Click on ${tabName} tab in left panel.`);
        const adminClick = this.page.locator(`//span[text()='${tabName}']`);
        await adminClick.click();
    }

    async clickOnButton(buttonName : string)
    {
        await this.page.getByRole('button',{name:`${buttonName}`}).click();
    }

    async selectDropDown(dropDown : string)
    {
        await this.page.locator(`//label[text()='${dropDown}']//following::i[1]`).click();
        await this.page.waitForTimeout(2000);
        await this.page.locator(`(//label[text()='${dropDown}']//following::div[@role='option'])[2]`).click();
    }
    
    async selectDropDownText(dropTextSelect : string , enterCharacter : string)
    {
        await this.page.locator(`//label[text()='${dropTextSelect}']//following::input[1]`).fill(`${enterCharacter}`);
        await this.page.waitForTimeout(5000);
        await this.page.locator(`(//label[text()='${dropTextSelect}']//following::div[@role='option'])[2]`).click();
    }

    async enterDataInTextFeild(textFieldName : string , value : string)
    {
        await this.page.locator(`//label[text()='${textFieldName}']//following::input[1]`).fill(`${value}`);
    }

}