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

    async selectDropDown(dropDownName : string , selectValue : string)
    {
        await this.page.locator(`//label[text()='${dropDownName}']//following::i[1]`).click();
        await this.page.waitForTimeout(2000);
        await this.page.locator(`(//label[text()='${dropDownName}']//following::span)[text()='${selectValue}']`).click();
    }
    
    async selectDropDownByText(dropDown : string , enterOneValue : string , selectIndex : number)
    {
        await this.page.locator(`//label[text()='${dropDown}']//following::input[1]`).fill(`${enterOneValue}`);
        await this.page.waitForTimeout(5000);
        await this.page.locator(`(//label[text()='${dropDown}']//following::div[@role='option'])[${selectIndex}]`).click();
        // (//label[text()='Employee Name']//following::div[@role='option'])[1]
    }

    async enterDataInTextFeild(textFieldName : string , value : string)
    {
        await this.page.locator(`//label[text()='${textFieldName}']//following::input[1]`).fill(`${value}`);
    }

    async enterDataByPlaceholder(placeholder : string , value : string)
    {
        await this.page.getByPlaceholder(`${placeholder}`).fill(`${value}`);
    }

}