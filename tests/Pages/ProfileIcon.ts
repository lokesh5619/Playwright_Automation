import {Page , Expect , Locator} from '@playwright/test';

export class ProfileIcon
{
    page:Page;

    constructor(page:Page)
    {
        this.page=page;
    }

    async clickOnProfileIcon()
    {
        const profileIcon = this.page.locator("//button[text()=' Upgrade']//following::li[1]");
        await profileIcon.click();
        await this.page.waitForTimeout(2000);
    }
    
    async clickOnAbout()
    {
        const logout = this.page.locator("[role='menu']>li:nth-child(1)");
        await logout.click();
    }
    async clickOnSupport()
    {
        const logout = this.page.locator("[role='menu']>li:nth-child(2)");
        await logout.click();
    }
    async clickOnChangePassword()
    {
        const logout = this.page.locator("[role='menu']>li:nth-child(3)");
        await logout.click();
    }
    async clickOnLogout()
    {
        const logout = this.page.locator("[role='menu']>li:nth-child(4)");
        await logout.click();
        await this.page.waitForTimeout(5000);
    }
}