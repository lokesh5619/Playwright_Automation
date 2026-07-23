import { Page,expect,Locator ,test} from "@playwright/test";
import { BaseSetup } from "../Base/BaseSetup";
import { LeftPanelPage } from "../Pages/LeftPanelPage";
import { ProductUtils } from "../Utils/ProductUtils";


class LeftPanelTest extends BaseSetup{
    override defineTests(): void{

        test.describe.serial('HRM',()=>{

            test('Verify Admin Page Visibility',async({})=>{
                const leftPanelPage = new ProductUtils(this.page);
                await leftPanelPage.clickOnLeftPanelTab('Admin');
            })

        })

    }
}


