import {expect,test , Browser , BrowserContext , Page} from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { Test_Configu } from '../Config/test-config';
import { ProfileIcon } from '../Pages/ProfileIcon';
import { attachment } from 'allure-js-commons';

export class BaseSetup{

    protected page !: Page;
    private context !: BrowserContext;

    register() : void {
        
        const self=this;

        test.beforeAll(async({browser} : {browser : Browser})=>{
            await self.beforeAll(browser);
        })

        test.beforeEach(async()=>{
            await self.beforeEach();
        })

        test.afterEach(async()=>{
            await self.afterEach();
        })

        test.afterAll(async()=>{
            await self.afterAll();
        })

        this.defineTests();
    }

    async beforeAll(browser : Browser):Promise<void>{
        this.context =await  browser.newContext();
        this.page =await this.context.newPage();

        await this.page.goto(Test_Configu.baseURL);
        await this.page.waitForLoadState('networkidle');
        await expect.soft(this.page).toHaveURL('/Dashboard/');
        
        await expect(this.page.locator("//h5[text()='Login']")).toBeVisible();        
        const loginPage = new LoginPage(this.page);

        await loginPage.enterUserName(Test_Configu.username);
        await expect.soft(this.page.locator("input[name=username]")).toHaveValue('Admin');
        
        await loginPage.enterUserPassword(Test_Configu.password);
        await expect(this.page.locator("input[name=password]")).toHaveValue('admin123');
        
        await expect(this.page.getByRole('button',{name:'Login'})).toBeVisible();
        await loginPage.clickOnLoginButton();
        await this.page.waitForTimeout(5000);
        
    }

    async beforeEach():Promise<void>{
        console.log('----- Before Each Test Case -----');
    }

    async afterEach():Promise<void>{
        console.log('----- After Each Test Case -----');
        await this.page.waitForLoadState('domcontentloaded');  // wait for page
        await this.page.waitForTimeout(1000);                  // small buffer

        

  const testInfo = test.info();

  if (testInfo.status !== testInfo.expectedStatus) {
    const screenshot = await this.page.screenshot({ fullPage: true });
    await attachment(`FAILED - ${testInfo.title}`, screenshot, 'image/png');
  }

  
  
  
  
  
        // const screenshot = await this.page.screenshot({ 
        //     fullPage: true,
        //     animations: 'disabled'   // stops animated elements from causing blank frames
        // });
  
        // await attachment('Screenshot', screenshot, 'image/png');
  

        // const screenshot = await this.page.screenshot({ fullPage: true });
        // await attachment('Screenshot', screenshot, 'image/png');
    }

    async afterAll():Promise<void>{
        // const logOut = new ProfileIcon(this.page);
        // await logOut.clickOnProfileIcon();
        // await logOut.clickOnLogout();
        // await this.page.waitForTimeout(5000);

        // await this.context?.close();
    }
    defineTests():void{

    }
}
