import {test , expect , Locator} from '@playwright/test';
import { BaseSetup } from '../Base/BaseSetup';
import { LeftPanelPage } from '../Pages/LeftPanelPage';
import { PimPage } from '../Pages/PimPage';
import { PIM_Details } from '../Config/test-config';

class PimHRM2Test extends BaseSetup
{ 
    override defineTest(): void {
        test.describe.serial('PIMHRM',async()=>{
            let pimPage : PimPage;
            test('TC-01 | ADD USER',async({})=>{
                 const pimPanel =new LeftPanelPage(this.page);
                        await pimPanel.clickOnPIM();
                
                        pimPage = new PimPage(this.page);
                        await pimPage.clickOnAddButtonPimPAnel();
                        await this.page.waitForTimeout(2000);
                
                        await pimPage.enterUserFirstName_ADD(PIM_Details.firstName);
                        await this.page.waitForTimeout(2000);
                        
                        await pimPage.enterUserMiddleName_ADD(PIM_Details.middlename);
                        await this.page.waitForTimeout(2000);
                        
                        await pimPage.enterUserLastName_ADD(PIM_Details.lastName);
                        await this.page.waitForTimeout(2000);
                
                        await pimPage.enterEmployeeId_ADD(PIM_Details.employeeId);
                        await this.page.waitForTimeout(2000);
                
                        await pimPage.clickOnSaveButton();
                        await this.page.waitForTimeout(10000);           
            })
        })
    }
}
new PimHRM2Test().register();