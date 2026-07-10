import {test,expect} from '@playwright/test'

test('facebookLogin',async({page}) => {
    await page.goto('http://facebook.com');

    await page.locator("//input[@name='email' or @type='email']").fill('Lokesh vishwakarma');

    await page.locator("//input[@name='pass' or @type='password']").fill('626365');

    await page.locator("//span[text()='Create new account']").click();

    await page.locator("//span[text()='Get started on Facebook']").isVisible();

    await page.locator("//label[text()='First name']//preceding-sibling::input").fill('Lokesh');

    await page.locator("//label[text()='Surname']//preceding-sibling::input").fill('Vishawakarma');

    // await page.locator("//div[@role='combobox'][child::span[text()='Day']]").dblclick();   // nhi chala X
    
    // await page.locator("//span[text()='Day']/parent::div").click();   // chal gya

    await page.locator("//span[text()='Day']/ancestor::div[@role='combobox']").click();  // chal gya
    
    await page.locator("//label[text()='Mobile number or email address']//preceding-sibling::input").fill('6263659258');
    
    await page.locator("//label[text()='Mobile number or email address']//preceding-sibling::input").fill('');


    // await page.locator("//div[text()='3']/ancestor::div[@role='listbox']").click();  // chal gya
    // await page.locator("//*[@role='listbox']/child::div[2]").click();

    // await expect(page).toHaveURL("/facebook/");

})

