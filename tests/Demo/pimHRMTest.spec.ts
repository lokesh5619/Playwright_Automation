import {Page , expect , test} from '@playwright/test';
import { LoginPage } from '.././Pages/LoginPage';
import { LeftPanelPage } from '.././Pages/LeftPanelPage';
import { Test_Configu, PIM_Details } from '.././Config/test-config';
import { PimPage } from '.././Pages/PimPage';

test.describe.serial('HRM_PIM_TEST', () => {

    let page: Page;
    let pimPage:PimPage;

    test.beforeAll(async ({ browser })=>{
        const context = await browser.newContext();
        page = await context.newPage();
        await page.goto(Test_Configu.baseURL);
        await page.waitForLoadState('networkidle');
        
        const login = new LoginPage(page);
        await login.enterUserName(Test_Configu.username);
        await login.enterUserPassword(Test_Configu.password);
        await login.clickOnLoginButton();
    })


    test.beforeEach(async ({})=>{
console.log("<----start test---->");
    })

    test('TC-01 | ADD USER_IN PIM | ',async({})=>{
        const pimPanel =new LeftPanelPage(page);
        await pimPanel.clickOnPIM();

        pimPage = new PimPage(page);
        await pimPage.clickOnAddButtonPimPAnel();
        await page.waitForTimeout(2000);

        await pimPage.enterUserFirstName_ADD(PIM_Details.firstName);
        await page.waitForTimeout(2000);
        
        await pimPage.enterUserMiddleName_ADD(PIM_Details.middlename);
        await page.waitForTimeout(2000);
        
        await pimPage.enterUserLastName_ADD(PIM_Details.lastName);
        await page.waitForTimeout(2000);

        await pimPage.enterEmployeeId_ADD(PIM_Details.employeeId);
        await page.waitForTimeout(2000);

        await pimPage.clickOnSaveButton();
        await page.waitForTimeout(10000);
        
    })
    test('TC-02 | Personal Details',async({})=>{
        
        await pimPage.driverLicencenumber(PIM_Details.licenceNumber);
        await page.waitForTimeout(10000);

        await pimPage.licenseExpiryDate();
        await page.waitForTimeout(10000);
    })

    test.afterEach(async ({})=>{

    })

    test.afterAll(async ({})=>{

    })
})