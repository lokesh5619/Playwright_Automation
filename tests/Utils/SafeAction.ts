import { Page, Locator } from "@playwright/test";

const DEFAULT_TIMEOUT = 30_000;

export class SafeAction {
  constructor(protected page: Page) {}

  async safeClick(locator: Locator, timeout = DEFAULT_TIMEOUT): Promise<void> {
    console.log(`[safeClick] Waiting for element to be visible and clicking | locator: ${locator}`);
    await locator.waitFor({ state: "visible", timeout });
    await locator.click();
    console.log(`[safeClick] Click performed successfully | locator: ${locator}`);
  }

  async safeDoubleClick(locator: Locator, timeout = DEFAULT_TIMEOUT): Promise<void> {
    console.log(`[safeDoubleClick] Waiting for element to be visible and double-clicking | locator: ${locator}`);
    await locator.waitFor({ state: "visible", timeout });
    await locator.dblclick();
    console.log(`[safeDoubleClick] Double-click performed successfully | locator: ${locator}`);
  }

  async safeFill(locator: Locator, value: string, timeout = DEFAULT_TIMEOUT): Promise<void> {
    console.log(`[safeFill] Waiting for element to be visible and filling with value: "${value}" | locator: ${locator}`);
    await locator.waitFor({ state: "visible", timeout });
    await locator.clear();
    await locator.fill(value);
    console.log(`[safeFill] Field filled successfully with value: "${value}" | locator: ${locator}`);
  }

  async safeType(locator: Locator, value: string, timeout = DEFAULT_TIMEOUT): Promise<void> {
    console.log(`[safeType] Waiting for element to be visible and typing value: "${value}" | locator: ${locator}`);
    await locator.waitFor({ state: "visible", timeout });
    await locator.pressSequentially(value);
    console.log(`[safeType] Typed value successfully: "${value}" | locator: ${locator}`);
  }

  async safeSelectOption(locator: Locator, value: string, timeout = DEFAULT_TIMEOUT): Promise<void> {
    console.log(`[safeSelectOption] Waiting for element to be visible and selecting option: "${value}" | locator: ${locator}`);
    await locator.waitFor({ state: "visible", timeout });
    await locator.selectOption(value);
    console.log(`[safeSelectOption] Option selected successfully: "${value}" | locator: ${locator}`);
  }

  async safeHover(locator: Locator, timeout = DEFAULT_TIMEOUT): Promise<void> {
    console.log(`[safeHover] Waiting for element to be visible and hovering | locator: ${locator}`);
    await locator.waitFor({ state: "visible", timeout });
    await locator.hover();
    console.log(`[safeHover] Hover performed successfully | locator: ${locator}`);
  }

  async safeCheck(locator: Locator, timeout = DEFAULT_TIMEOUT): Promise<void> {
    console.log(`[safeCheck] Waiting for element to be visible and checking | locator: ${locator}`);
    await locator.waitFor({ state: "visible", timeout });
    await locator.check();
    console.log(`[safeCheck] Checkbox checked successfully | locator: ${locator}`);
  }

  async safeUncheck(locator: Locator, timeout = DEFAULT_TIMEOUT): Promise<void> {
    console.log(`[safeUncheck] Waiting for element to be visible and unchecking | locator: ${locator}`);
    await locator.waitFor({ state: "visible", timeout });
    await locator.uncheck();
    console.log(`[safeUncheck] Checkbox unchecked successfully | locator: ${locator}`);
  }

  async safeGetText(locator: Locator, timeout = DEFAULT_TIMEOUT): Promise<string> {
    console.log(`[safeGetText] Waiting for element to be visible and retrieving text | locator: ${locator}`);
    await locator.waitFor({ state: "visible", timeout });
    const text = await locator.innerText();
    console.log(`[safeGetText] Retrieved text: "${text}" | locator: ${locator}`);
    return text;
  }

  async safeGetAttribute(locator: Locator, attr: string, timeout = DEFAULT_TIMEOUT): Promise<string | null> {
    console.log(`[safeGetAttribute] Waiting for element to be attached and retrieving attribute: "${attr}" | locator: ${locator}`);
    await locator.waitFor({ state: "attached", timeout });
    const value = await locator.getAttribute(attr);
    console.log(`[safeGetAttribute] Attribute "${attr}" value: "${value}" | locator: ${locator}`);
    return value;
  }

  async safeIsVisible(locator: Locator, timeout = DEFAULT_TIMEOUT): Promise<boolean> {
    console.log(`[safeIsVisible] Checking element visibility | locator: ${locator}`);
    try {
      await locator.waitFor({ state: "visible", timeout });
      console.log(`[safeIsVisible] Element is visible | locator: ${locator}`);
      return true;
    } catch {
      console.log(`[safeIsVisible] Element is not visible within timeout: ${timeout}ms | locator: ${locator}`);
      return false;
    }
  }

  async safeScrollIntoView(locator: Locator, timeout = DEFAULT_TIMEOUT): Promise<void> {
    console.log(`[safeScrollIntoView] Waiting for element to be attached and scrolling into view | locator: ${locator}`);
    await locator.waitFor({ state: "attached", timeout });
    await locator.scrollIntoViewIfNeeded();
    console.log(`[safeScrollIntoView] Element scrolled into view successfully | locator: ${locator}`);
  }

  async safeUploadFile(locator: Locator, filePath: string | string[], timeout = DEFAULT_TIMEOUT): Promise<void> {
    console.log(`[safeUploadFile] Waiting for element to be attached and uploading file(s): ${JSON.stringify(filePath)} | locator: ${locator}`);
    await locator.waitFor({ state: "attached", timeout });
    await locator.setInputFiles(filePath);
    console.log(`[safeUploadFile] File(s) uploaded successfully: ${JSON.stringify(filePath)} | locator: ${locator}`);
  }
}