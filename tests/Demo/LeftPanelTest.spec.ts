import { Page,expect,Locator ,test} from "@playwright/test";
import { BaseSetup } from "../Base/BaseSetup";
import { LeftPanelPage } from "../Pages/LeftPanelPage";
import { PIM_Details ,UserDetails } from "../Config/test-config";
import { AdminPage } from "../Pages/AdminPage";
// import { ProductUtils } from "../Utils/ProductUtils";


class LeftPanelTest extends BaseSetup{
    override defineTests(): void{

        test.describe.serial('HRM',()=>{

            let leftPanelTab : LeftPanelPage;
            let adminPage : AdminPage;

            test.only('Verify Admin Page Visibility',async({})=>{
                leftPanelTab = new LeftPanelPage(this.page);

                await leftPanelTab.clickOnLeftPanelTab('Admin');
                // await this.page.waitForTimeout(3000);
                await leftPanelTab.validateAdminPageVisibility();
                
                await leftPanelTab.clickOnLeftPanelTab('PIM');
                // await this.page.waitForTimeout(3000);
                await leftPanelTab.validatePIMPageVisibility();
                
                await leftPanelTab.clickOnLeftPanelTab('Leave');
                // await this.page.waitForTimeout(3000);
                await leftPanelTab.validateLeavePageVisibility();
                
                await leftPanelTab.clickOnLeftPanelTab('Time');
                // await this.page.waitForTimeout(3000);
                await leftPanelTab.validateTimePageVisibility();
                
                await this.page.waitForTimeout(3000);

            
            })
        })
    }
}
new LeftPanelTest().register();

