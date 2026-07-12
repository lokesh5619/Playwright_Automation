import {test,expect} from '@playwright/test'

test('facebookLogin',async({page}) => {
    await page.goto('http://facebook.com');

    //Facebook Login
    await page.locator("//input[@name='email' or @type='email']").fill('Lokesh vishwakarma');

    await page.locator("//input[@name='pass' or @type='password']").fill('626365');

    //Create new account
    await page.locator("//span[text()='Create new account']").click();

    const newAccount = page.locator("//span[text()='Get started on Facebook']");

    console.log(await newAccount.isVisible());

    //First name
    await page.locator("//label[text()='First name']//preceding-sibling::input").fill('Lokesh');

    //Surname
    await page.locator("//label[text()='Surname']//preceding-sibling::input").fill('Vishawakarma');

    //Date of birth
    await page.locator("//span[text()='Day']/ancestor::div[@role='combobox']").click(); 

    await page.locator("//div[text()='5']").click();
   
    await page.locator("//span[text()='Month']/ancestor::div[@role='combobox']").click(); 

    await page.locator("//div[text()='October']").click();
   
    await page.locator("//span[text()='Year']/ancestor::div[@role='combobox']").click();

    await page.locator("//div[text()='2004']").click();

    //Select Gender
    await page.locator("//span[text()='Select your gender']/ancestor::div[@role='combobox']").click();

    await page.locator("//div[text()='Male']").click();

    //Enter mobile nunmber
    await page.locator("//label[text()='Mobile number or email address']//preceding-sibling::input").fill('6263659258');
    
    //Enter Password
    await page.locator("//label[text()='Password']//preceding-sibling::input").fill('lokesh@123');

    


    // await page.locator("//div[text()='3']/ancestor::div[@role='listbox']").click();  // chal gya
    // await page.locator("//*[@role='listbox']/child::div[2]").click();

    // await expect(page).toHaveURL("/facebook/");

})

