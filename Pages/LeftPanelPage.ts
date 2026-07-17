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
        const adminClick = this.page.locator("[role='navigation']>div:last-child>:last-child>:nth-child(2)");
        await adminClick.click();
    }
    async clickOnLeave()
    {
        console.log("Click on Admin tab in left panel.");
        const adminClick = this.page.locator("[role='navigation']>div:last-child>:last-child>:nth-child(3)");
        await adminClick.click();
    }
    async clickOnTime()
    {
        console.log("Click on Admin tab in left panel.");
        const adminClick = this.page.locator("[role='navigation']>div:last-child>:last-child>:nth-child(4)");
        await adminClick.click();
    }
    async clickOnRecruitment()
    {
        console.log("Click on Admin tab in left panel.");
        const adminClick = this.page.locator("[role='navigation']>div:last-child>:last-child>:nth-child(5)");
        await adminClick.click();
    }
    async clickOnMyInfo()
    {
        console.log("Click on Admin tab in left panel.");
        const adminClick = this.page.locator("[role='navigation']>div:last-child>:last-child>:nth-child(6)");
        await adminClick.click();
    }
    async clickOnMyPerformance()
    {
        console.log("Click on Admin tab in left panel.");
        const adminClick = this.page.locator("[role='navigation']>div:last-child>:last-child>:nth-child(7)");
        await adminClick.click();
    }
    async clickOnDashboard()
    {
        console.log("Click on Admin tab in left panel.");
        const adminClick = this.page.locator("[role='navigation']>div:last-child>:last-child>:nth-child(8)");
        await adminClick.click();
    }
    async clickOnDirectory()
    {
        console.log("Click on Admin tab in left panel.");
        const adminClick = this.page.locator("[role='navigation']>div:last-child>:last-child>:nth-child(9)");
        await adminClick.click();
    }
    async clickMaintenance()
    {
        console.log("Click on Admin tab in left panel.");
        const adminClick = this.page.locator("[role='navigation']>div:last-child>:last-child>:nth-child(10)");
        await adminClick.click();
    }
    async clickOnClaim()
    {
        console.log("Click on Admin tab in left panel.");
        const adminClick = this.page.locator("[role='navigation']>div:last-child>:last-child>:nth-child(11)");
        await adminClick.click();
    }
    async clickOnBuzz()
    {
        console.log("Click on Admin tab in left panel.");
        const adminClick = this.page.locator("[role='navigation']>div:last-child>:last-child>:nth-child(12)");
        await adminClick.click();
    }
}