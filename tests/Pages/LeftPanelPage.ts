import {Page , expect, Locator} from '@playwright/test';
import { ProductUtils } from '../Utils/ProductUtils';

export class LeftPanelPage extends ProductUtils
{
    async clickOnAdmin()
    {
        await this.clickOnLeftPanelTab('Admin');
    }

    //Asserstion for Admin Page
    async validateAdminPageVisibility()
    {
        await this.validatePageVisibility('Admin');
    }
    
    async clickOnPIM()
    {
        await this.clickOnLeftPanelTab('PIM');
    }
    
    //Asserstion for PIM Page
    async validatePIMPageVisibility()
    {
        await this.validatePageVisibility('PIM');
    }
    
    
    async clickOnLeave()
    {
        await this.clickOnLeftPanelTab('Leave');
    }

    //Asserstion for Leave Page
    async validateLeavePageVisibility()
    {
        await this.validatePageVisibility('Leave');
    }
    
    async clickOnTime()
    {
        await this.clickOnLeftPanelTab('Time');
    }
    
    //Asserstion for Leave Page
    async validateTimePageVisibility()
    {
        await this.validatePageVisibility('Time');
    }
    
    // async clickOnRecruitment()
    // {
    //     await this.clickOnLeftPanelTab('Recruitment');
    // }
    // async clickOnMyInfo()
    // {
    //     await this.clickOnLeftPanelTab('My Info');
    // }
    // async clickOnMyPerformance()
    // {
    //     await this.clickOnLeftPanelTab('My Performance');
    // }
    // async clickOnDashboard()
    // {
    //     await this.clickOnLeftPanelTab('Dashboard');
    // }
    // async clickOnDirectory()
    // {
    //     await this.clickOnLeftPanelTab('Directory');
    // }
    // async clickMaintenance()
    // {
    //     await this.clickOnLeftPanelTab('Maintenance');
    // }
    // async clickOnClaim()
    // {
    //     await this.clickOnLeftPanelTab('Claim');
    // }
    // async clickOnBuzz()
    // {
    //     await this.clickOnLeftPanelTab('Buzz');
    // }
}