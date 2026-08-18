import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
import * as path from 'path';


const env = process.env.ENV || 'dev';
dotenv.config({ path: path.resolve(__dirname, `.env.${env}`) });


/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',

  timeout:60000,

  /* Run tests in files in parallel */
  fullyParallel:true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
      // forbidOnly: !!process.env.CI,
  /* Retry on CI only */
      // retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
    // workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  //reporter:'html',

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    headless:true,
    /* Base URL to use in actions like `await page.goto('')`. */
    baseURL: 'https://opensource-demo.orangehrmlive.com',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace:'on-first-retry',
  },

  reporter: [
    ['line'],                          // console output
    ['allure-playwright', {
      detail: true,
      outputFolder: 'allure-results',  // raw results go here
      suiteTitle: false,
    }]
  ],

  /* Configure projects for major browsers */
   projects: [
    // Run auth setup once before any browser project (skip with SKIP_AUTH=true)
    {
      name: 'setup',
      testMatch: process.env.SKIP_AUTH ? /^$/ : /auth\.setup\.ts/,
    },

    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        browserName: 'chromium',
        storageState: process.env.SKIP_AUTH ? undefined : 'playwright/.auth/user.json',
      },
      dependencies: process.env.SKIP_AUTH ? [] : ['setup'],
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        browserName: 'firefox',
        storageState: process.env.SKIP_AUTH ? undefined : 'playwright/.auth/user.json',
      },
      dependencies: process.env.SKIP_AUTH ? [] : ['setup'],
    },
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
        browserName: 'webkit',
        storageState: process.env.SKIP_AUTH ? undefined : 'playwright/.auth/user.json',
      },
      dependencies: process.env.SKIP_AUTH ? [] : ['setup'],
    },
  ],
  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
