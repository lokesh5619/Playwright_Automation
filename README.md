# Playwright Automation Framework (TypeScript)

## Project Overview
This project is built using **Playwright with TypeScript** to automate the OrangeHRM web application.
It follows the **Page Object Model (POM)** design pattern and includes Playwright Hooks for better test management.

------------------------------------------------

## Technologies Used

- Playwright
- TypeScript
- Node.js
- Visual Studio Code
- Git & GitHub

------------------------------------------------

## Features Implemented

### Login Automation
- Automated OrangeHRM login functionality.
- Verified successful login by validating the Dashboard page.

### CRUD Operations

#### Add User
- Added a new user with valid details.
- Verified that the user was created successfully.

#### Search User
- Searched for a user using username.
- Verified that the correct user appeared in the search results.

#### Update User
- Updated existing user information.
- Validated that the updated details were saved successfully.

#### Delete User
- Deleted the selected user.
- Verified that the user was removed successfully.

------------------------------------------------

## Playwright Hooks Used

### beforeAll
- Executes once before all test cases.
- Used for initial setup.

### beforeEach
- Executes before every test case.
- Used for browser/page initialization and login.

### afterEach
- Executes after every test case.
- Used for cleanup and capturing screenshots on test failure.

### afterAll
- Executes once after all test cases.
- Used to close browser resources.

------------------------------------------------

## Page Object Model (POM)

The project follows the Page Object Model design pattern to improve:

- Code reusability
- Readability
- Maintainability
- Easy locator management
- Better test organization

------------------------------------------------

## Test Scenarios Covered

- Login
- Add User
- Search User
- Update User
- Delete User
- Logout

------------------------------------------------

## Reporting

- HTML Report
- allure Report
- Screenshot on Test Failure

------------------------------------------------

## Future Enhancements

- Data-driven testing
- Cross-browser execution
- API testing
- CI/CD integration using Jenkins
- Parallel execution
- Allure Reporting
