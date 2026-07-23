import {Page , expect, Locator} from '@playwright/test';
import { ProductUtils } from '../Utils/ProductUtils';

export class LeftPanelPage extends ProductUtils
{
    // page:Page;
     
    // constructor(page:Page)
    // {
    //     this.page=page;
    // }

    async clickOnAdmin()
    {
        await this.clickOnLeftPanelTab('Admin');
    }

    async validateAdminPageVisibility()
    {
        await this.page.waitForTimeout(10000);
        const isVisible = await this.page.locator("//h6[text()='Admin']").isVisible();
        console.log('Admin page is visible'+ isVisible );   // true or false.  
        await expect(this.page.locator("//h6[text()='Admin']")).toBeVisible();
    }

    async clickOnPIM()
    {
        await this.clickOnLeftPanelTab('PIM');
    }


    async validatePIMPageVisibility()
    {
        await this.page.waitForTimeout(10000);
        const isVisible = await this.page.locator("//h6[text()='PIM']").isVisible();
        console.log('Admin page is visible'+ isVisible );   // true or false.  
        await expect(this.page.locator("//h6[text()='PIM']")).toBeVisible();
    }

    
    async clickOnLeave()
    {
        await this.clickOnLeftPanelTab('Leave');
    }
    async clickOnTime()
    {
    }
    async clickOnRecruitment()
    {
    }
    async clickOnMyInfo()
    {
    }
    async clickOnMyPerformance()
    {
    }
    async clickOnDashboard()
    {
    }
    async clickOnDirectory()
    {
    }
    async clickMaintenance()
    {
    }
    async clickOnClaim()
    {
    }
    async clickOnBuzz()
    {
    }
}