import {Page , Expect, Locator} from '@playwright/test';

export class LeftPanel
{
    page:Page;
     
    constructor(page:Page)
    {
        this.page=page;
    }

    async clickOnAdmin()
    {
        console.log("Click on Admin tab in left panel.");
        const adminClick = this.page.locator("[role='navigation']>div:last-child>:last-child>:nth-child(1)");
        await adminClick.click();
    }
    async clickOnPIM()
    {
        console.log("Click on Admin tab in left panel.");
        const adminClick = this.page.locator("[role='navigation']>div:last-child>:last-child>:nth-child(1)");
        await adminClick.click();
    }
    async clickOnLeave()
    {
        console.log("Click on Admin tab in left panel.");
        const adminClick = this.page.locator("[role='navigation']>div:last-child>:last-child>:nth-child(1)");
        await adminClick.click();
    }
    async clickOnTime()
    {
        console.log("Click on Admin tab in left panel.");
        const adminClick = this.page.locator("[role='navigation']>div:last-child>:last-child>:nth-child(1)");
        await adminClick.click();
    }
    async clickOnRecruitment()
    {
        console.log("Click on Admin tab in left panel.");
        const adminClick = this.page.locator("[role='navigation']>div:last-child>:last-child>:nth-child(1)");
        await adminClick.click();
    }
    async clickOnMyInfo()
    {
        console.log("Click on Admin tab in left panel.");
        const adminClick = this.page.locator("[role='navigation']>div:last-child>:last-child>:nth-child(1)");
        await adminClick.click();
    }
    async clickOnMyPerformance()
    {
        console.log("Click on Admin tab in left panel.");
        const adminClick = this.page.locator("[role='navigation']>div:last-child>:last-child>:nth-child(1)");
        await adminClick.click();
    }
    async clickOnDashboard()
    {
        console.log("Click on Admin tab in left panel.");
        const adminClick = this.page.locator("[role='navigation']>div:last-child>:last-child>:nth-child(1)");
        await adminClick.click();
    }
    async clickOnDirectory()
    {
        console.log("Click on Admin tab in left panel.");
        const adminClick = this.page.locator("[role='navigation']>div:last-child>:last-child>:nth-child(1)");
        await adminClick.click();
    }
    async clickMaintenance()
    {
        console.log("Click on Admin tab in left panel.");
        const adminClick = this.page.locator("[role='navigation']>div:last-child>:last-child>:nth-child(1)");
        await adminClick.click();
    }
    async clickOnClaim()
    {
        console.log("Click on Admin tab in left panel.");
        const adminClick = this.page.locator("[role='navigation']>div:last-child>:last-child>:nth-child(1)");
        await adminClick.click();
    }
}