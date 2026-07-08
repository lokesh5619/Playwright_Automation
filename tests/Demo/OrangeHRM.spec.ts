import { test, expect } from '@playwright/test';

test('OrangeHRM Login', async ({ page }) => {
    
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',{timeout:20000});
    
    await page.waitForLoadState('networkidle');
    
    const userLogin = page.getByPlaceholder('Username');
    await userLogin.fill('Admin');
    
    const userPassword = page.getByPlaceholder('Password');
    await userPassword.fill('admin123');
    
    const loginButton = page.getByRole('button', { name: 'Login' });
    await loginButton.click();

    await expect(page.getByRole('heading',{name:'Dashboard'})).toBeVisible();
    
    //Dropdown <--to--> Logout 
    const menuDropDown = page.locator('.oxd-userdropdown-tab');
    
    await menuDropDown.click();

    await page.getByRole('menuitem',{name:'Logout'}).click();
    
    // await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/login/index")
    
    
    // Again login
    await userLogin.fill('Admin');

    await userPassword.fill('admin123');    
    
    await loginButton.click();
    
    await expect(page.getByRole('heading',{name:'Dashboard'})).toBeVisible();
    
    // Again open menu to change a password
    await menuDropDown.click();
    
    //change password
    await page.getByRole('menuitem',{name:'Change Password'}).click();
    
    await page.getByText('Update Password').isVisible();

    await page.locator('.oxd-input-group.oxd-input-field-bottom-space').filter({hasText:'Current Password'}).locator('input').fill('admin123');

    await page.locator('.oxd-input-group.oxd-input-field-bottom-space').filter({hasText:'Password'}).locator('input').fill('lokesh123');

    await page.locator('.oxd-input-group.oxd-input-field-bottom-space').filter({hasText:'Confirm Password'}).locator('input').fill('lokesh123');

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/pim");
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //
    //  await expect(page.getByText('Dashboard')).toBeVisible();
    
    // await expect(page.getByText('Dashboard')).toBeVisible();
    
    // await page.getByText('Recruitment').click();
    // await expect(page).toHaveTitle('OrangeHRM');
});