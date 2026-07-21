import {test , expect , Page} from '@playwright/test';

test.describe.serial('OrangeHRM',()=>{

    let page:Page;
    let flag:boolean;

    test.beforeAll(async({browser})=>{
        const context = await browser.newContext();
        page = await context.newPage();

        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await page.waitForLoadState('networkidle');
        
        const userLogin = page.getByPlaceholder('username');
        await userLogin.fill('Admin');
        
        const userPassword = page.getByPlaceholder('password');
        await userPassword.fill('admin123');
        
        const loginButton = page.getByRole('button', { name: 'Login' });
        await loginButton.click();

    
    });

    test.beforeEach(async()=>{
        console.log("<-----locator start----->");
    });
    
    test('TC-01 | ADD USER',async({})=>{
        console.log("Click on Admin tab in left panel.");
        await page.locator("[role='navigation']>div:last-child>:last-child>:nth-child(1)").click();
        

        console.log("Click on add button to Add user");
        await page.locator("[id=app]>div>:last-child>div>div>div:last-child>div>button").click();
        
        
        console.log("Click on User Role and Select the role-->Admin");
        await page.locator("[class='oxd-form']>div>div>:first-child>div>:last-child>div>div>:last-child").click();
        await page.locator("[role='listbox']>div:nth-child(2)").click();
        

        console.log("Click on Employee name and Select the name");
        await page.locator("[class='oxd-form']>div>div>:nth-child(2)>div>:last-child>div>div>input").fill("s");
        await page.waitForTimeout(7000);
        await page.locator("[role='listbox']>:nth-child(1)").click();
        await page.waitForTimeout(1000);
        
        
        console.log("Click on Status and Select Status--> Enabled");
        await page.locator("[class='oxd-form']>div>div>:nth-child(3)>div>:last-child>div>div>:last-child").click();
        await page.locator("[role='listbox']>div:nth-child(2)").click();
        
        
        console.log("Click on Username Enter username");
        await page.locator("//h6[text()='Add User']//following::input[2]").fill("lokesh__111111");
       
        
        
        console.log("Enter the Password");
        await page.locator("(//input[@type='password'])[1]").fill("lokesh@1234567");
        await page.waitForTimeout(2000);
        
        
        console.log("Enter the Confirm Password");
        await page.locator("(//input[@type='password'])[2]").fill("lokesh@1234567");
        await page.waitForTimeout(2000);
        
        
        console.log("Click on the Save button");
        await page.locator("[type='submit']").click();
        await page.waitForTimeout(2000);
        
        console.log("<-------USER CREATED DONE------->");
    });
    
    test('TC-02 | SEARCH USER',async({})=>{
        await page.waitForTimeout(10000);
        await page.waitForLoadState('networkidle')
        
        console.log("Search user");
        await page.locator("//h5[text()='System Users']//following::input[1]").fill("lokesh__111111");
        await page.waitForTimeout(1000);
        
        console.log("Click on Search button to search user");
        await page.locator("[type='submit']").click();
        await page.waitForTimeout(2000);
        
        console.log("<------- SEARCH USER ------->");
    });

    test('TC-03 | UPDATE USER',async({})=>{
         console.log("Click on Update icon to update user details");
         await page.locator("(//button[@type='button']//i)[6]").click();
        await page.waitForTimeout(5000);
        
        
        console.log("Enter username you are changing");
        await page.locator("//h6[text()='Edit User']//following::input[2]").fill("lokesh");
        await page.waitForTimeout(3000);
        
        
        console.log("Click on save button to save updates details");
        await page.locator("//button[@type='submit']").click();
        
        console.log("<------- UPDATE DONE ------->");
    });

    test('TC-04 | DELETE USER',async({})=>{
        
        await page.waitForTimeout(5000);    
    
        console.log("Enter User name you want to delete");
        await page.locator("//h5[text()='System Users']//following::input[1]").fill("lokesh");    
        await page.waitForTimeout(2000);
        
        
        console.log("Click on Search button ");
        await page.locator("//button[@type='submit']").click();
        await page.waitForTimeout(10000);
        
        
        console.log("Click on Delete icon to delete user detail");
        await page.locator("(//button[@type='button']//i)[5]").click();
        await page.waitForTimeout(2000);
        
        
        console.log("User deleted succesfully");
        await page.locator("//button[text()=' Yes, Delete ']").click();
        await page.waitForTimeout(1000);
    
        console.log("<------- DELETE DONE ------->");
        
    });
    
    test.afterEach(async()=>{
        console.log("<-----locator End----->");
    });

    test.afterAll(async()=>{
        await page.locator("//button[text()=' Upgrade']//following::li[1]").click();
        await page.waitForTimeout(5000);
        await page.locator("[role='menu']>li:nth-child(4)").click();
        await page.waitForTimeout(5000);
        console.log("<------- LogOut Successful ------->");
    });
})