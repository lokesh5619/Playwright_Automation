import {Page , Locator, Expect} from '@playwright/test';

export class LoginPage{

    page:Page;

    constructor(page:Page)
    {
        this.page=page;
    }

    async enterUserName(nameValue : string)
    {
        const userLogin = this.page.getByPlaceholder("username");
        await userLogin.fill(nameValue);
    }
    
    async enterUserPassword(passValue : string)
    {
        const userPassword = this.page.getByPlaceholder("password");
        await userPassword.fill(passValue);
    }
    
    async clickOnLoginButton()
    {
        const userLogin = this.page.getByRole('button', { name: 'Login' });
        await userLogin.click();
    }
}