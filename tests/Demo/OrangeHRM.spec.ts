import { test, expect } from '@playwright/test';

test('OrangeHRM Login', async ({ page }) => {
    
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
    await page.waitForLoadState('networkidle');
    
    const userLogin = page.getByPlaceholder('Username');
    await userLogin.fill('Admin');
    
    const userPassword = page.getByPlaceholder('Password');
    await userPassword.fill('admin123');
    
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByRole('heading',{name:'Dashboard'})).toBeVisible();

    //Dropdown <--to--> Logout 
    const menuDropDown = page.locator('.oxd-userdropdown-tab');
    
    await menuDropDown.click();

    await page.getByRole('menuitem',{name:'Logout'}).click();
    
    // await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/login/index")
    
    
    // Again login
    await userLogin.fill('Admin');

    await userPassword.fill('admin123');    

    // Again open menu to change a password
    await menuDropDown.click();
    
    await page.getByRole('menuitem',{name:'Change Password'}).click();
    
    
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/PIM");
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //
    //  await expect(page.getByText('Dashboard')).toBeVisible();
    
    // await expect(page.getByText('Dashboard')).toBeVisible();
    
    // await page.getByText('Recruitment').click();
    // await expect(page).toHaveTitle('OrangeHRM');
});