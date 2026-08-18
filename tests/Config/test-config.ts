import { RandomDataUtil } from "../Utils/Randomutils"

export const Test_Configu = {
    baseURL: process.env.APP_BASE_URL || 'https://opensource-demo.orangehrmlive.com',
    username: process.env.APP_USERNAME || 'Admin',
    password: process.env.APP_PASSWORD || 'admin123',
    browser: process.env.APP_BROWSER || 'chromium',
    authFile: 'playwright/.auth/user.json',
}

export const UserDetails = {
    employeeName : 'a',
    usernameIn_ADD : RandomDataUtil.username(),
    passwordIn_ADD : 'lokesh@12345',
    updateName: 'lokesh_123'
}

export const PIM_Details = {
    firstName : '__lokesh__',
    middlename : '-------',
    lastName : 'Vishwakarma',
    employeeId : '9999',

    //Personal Details

    licenceNumber :'MP0920231234567',
}