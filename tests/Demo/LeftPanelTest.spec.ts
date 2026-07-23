import { Page,expect,Locator ,test} from "@playwright/test";
import { BaseSetup } from "../Base/BaseSetup";
import { LeftPanelPage } from "../Pages/LeftPanelPage";
import { PIM_Details ,UserDetails } from "../Config/test-config";
// import { ProductUtils } from "../Utils/ProductUtils";


class LeftPanelTest extends BaseSetup{
    override defineTests(): void{

        test.describe.serial('HRM',()=>{

            let leftPanelTab : LeftPanelPage;

            test('Verify Admin Page Visibility',async({})=>{
                leftPanelTab = new LeftPanelPage(this.page);
                // await leftPanelTab.clickOnLeftPanelTab('Admin');

                await leftPanelTab.clickOnLeftPanelTab('Admin');
                await this.page.waitForTimeout(3000);
                await leftPanelTab.validateAdminPageVisibility();
                
                await leftPanelTab.clickOnButton('Add');
                await this.page.waitForTimeout(3000);

                await leftPanelTab.selectDropDown('User Role');
                
                await leftPanelTab.selectDropDownText('Employee Name', UserDetails.employeeName);
                
                await leftPanelTab.selectDropDown('Status');
                
                await leftPanelTab.enterDataInTextFeild('Username', UserDetails.usernameIn_ADD);
                await this.page.waitForTimeout(2000);
                
                await leftPanelTab.enterDataInTextFeild('Password', UserDetails.passwordIn_ADD);
                await this.page.waitForTimeout(2000);
                
                await leftPanelTab.enterDataInTextFeild('Confirm Password',UserDetails.passwordIn_ADD);
                await this.page.waitForTimeout(2000);
                
                await leftPanelTab.clickOnButton('Save');
                await this.page.waitForTimeout(10000);
                
                await leftPanelTab.enterDataInTextFeild('Username', UserDetails.usernameIn_ADD);
                await this.page.waitForTimeout(2000);
                
                await leftPanelTab.selectDropDown('User Role');
                
                await leftPanelTab.selectDropDownText('Employee Name', UserDetails.employeeName);
                await this.page.waitForTimeout(2000);
                
                await leftPanelTab.selectDropDown('Status');
                await this.page.waitForTimeout(3000);
                
                await leftPanelTab.clickOnButton('Search');

                await this.page.waitForTimeout(3000);
                // await leftPanelTab.enterDataInTextFeild('Password*','lokesh');
                // await this.page.waitForTimeout(3000);
    
                
                
                // await leftPanelTab.clickOnPIM();
                // await this.page.waitForTimeout(5000);
                // await leftPanelTab.clickOnLeave();
                // await this.page.waitForTimeout(5000);
                
                // const leftPanelTab = new ProductUtils(this.page);
                // await leftPanelTab.clickOnLeftPanelTab('Admin');
                // await leftPanelTab.clickOnLeftPanelTab('PIM');
                // await leftPanelTab.clickOnLeftPanelTab('Time');

            })

        })

    }
}
new LeftPanelTest().register();

