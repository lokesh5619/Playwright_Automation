import { test, Browser, BrowserContext, Page } from '@playwright/test';
import { Test_Configu } from '../Config/test-config';
import { attachment } from 'allure-js-commons';

/**
 * BaseSetup
 * ---------
 * All shared hooks (beforeAll / beforeEach / afterEach / afterAll) live here.
 * Every test module extends this class and only adds its own test cases.
 *
 * Folder structure this expects:
 *   tests/
 *     base/BaseSetup.ts        ← this file
 *     pages/LoginPage.ts       ← ../pages/
 *   config/
 *     test-config.ts           ← ../../config/
 */
export class BaseSetup {

  protected page!: Page;
  private context!: BrowserContext;

  // ── Register all hooks + tests into Playwright ──────────────────────────

  register(): void {
    const self = this;

    test.beforeEach(async ({ browser }: { browser: Browser }) => {
      await self.beforeEach(browser);
    });

    test.afterEach(async () => {
      await self.afterEach();
    });

    this.defineTests();
  }

  // ── Lifecycle hooks ──────────────────────────────────────────────────────

  // Each test gets its own context+page so tests can run in parallel safely
  async beforeEach(browser: Browser): Promise<void> {
    console.log('----- Before Each Test Case -----');

    this.context = await browser.newContext({ storageState: Test_Configu.authFile });
    this.page    = await this.context.newPage();

    await this.page.goto(Test_Configu.baseURL);
    await this.page.waitForLoadState('networkidle');
  }

  async afterEach(): Promise<void> {
    console.log('----- After Each Test Case -----');

    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForTimeout(1000);

    const screenshot = await this.page.screenshot({
      // fullPage: true,
      // animations: 'disabled'
    });

    await attachment('Screenshot', screenshot, 'image/png');

    await this.context?.close();
  }

  // ── Override in subclass to define test cases ────────────────────────────

  defineTests(): void {
    // subclass puts test() calls here
  }
}
