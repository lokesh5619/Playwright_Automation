import {Page, test, expect, Locator} from '@playwright/test';
import {SafeAction2} from './SafeAction2';


export class ProductUtils extends SafeAction2{
    
    constructor(page:Page)
    {
        super(page);
    }

    async clickOnLeftPanelTab(tabName : string)
    {
        console.log(`Click on ${tabName} tab in left panel.`);
        await this.safeClick(this.page.locator(`//span[text()='${tabName}']`));
    }

    async clickOnButton(buttonName : string)
    {
        await this.safeClick(this.page.getByRole('button',{name:`${buttonName}`}));
        await this.page.waitForTimeout(8000);
    }

    async selectDropDown(dropDownName : string , selectValue : string)
    {
        await this.safeClick(this.page.locator(`//label[text()='${dropDownName}']//following::i[1]`))
        // await this.page.waitForTimeout(2000);
        await this.safeClick(this.page.locator(`(//label[text()='${dropDownName}']//following::span)[text()='${selectValue}']`));
    }
    
    async selectDropDownByText(dropDown : string , enterOneValue : string , selectIndex : number)
    {
        await this.safeFill(this.page.locator(`//label[text()='${dropDown}']//following::input[1]`), enterOneValue);
        // await this.page.waitForTimeout(5000);
        await this.safeClick(this.page.locator(`(//label[text()='${dropDown}']//following::div[@role='option'])[${selectIndex}]`));
        // (//label[text()='Employee Name']//following::div[@role='option'])[1]
    }

    async enterDataInTextFeild(textFieldName : string , value : string)
    {
        await this.safeFill(this.page.locator(`//label[text()='${textFieldName}']//following::input[1]`),value);
    }

    async enterDataByPlaceholder(placeholder : string , value : string)
    {
        await this.safeFill(this.page.getByPlaceholder(`${placeholder}`),value)
    }


    async validatePageVisibility(headerName: string)
    {
      await this.page.waitForTimeout(2000);
      const isVisible = await this.page.locator(`//h5[text()='${headerName}'] | //h6[text()='${headerName}']`).isVisible();
      await expect(this.page.locator(`//h5[text()='${headerName}'] | //h6[text()='${headerName}']`)).toBeVisible();
      console.log(`${headerName} page is visible ${isVisible}` );   // true or false.  
    }

    

    async validateUserVisibility(userName: string): Promise<void> {
        await this.page.waitForTimeout(2000);
        await expect(this.page.locator(`//div[text()='${userName}']`)).toBeVisible();
        console.log(`${userName} is Visible`);
    }

    async clickOnCheckBox(index : number){
        await this.safeCheck(this.page.locator(`(//input[@type='checkbox'])[${index}]`));
    }
}