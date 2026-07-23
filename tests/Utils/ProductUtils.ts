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
        const adminClick = this.page.locator(`//h6[text()='${tabName}']`);
    }
}