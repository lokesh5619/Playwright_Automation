import {Page,Locator} from '@playwright/test';

const DEFAULT_TIMEOUT = 60_000;

export class SafeAction2{
    constructor(protected page:Page){}

    async safeClick(locator:Locator ,timeout = DEFAULT_TIMEOUT ){
        console.log(`[safeClick] Waiting for element to be visible and clicking | locator: ${locator}`);
        await locator.waitFor({state:'visible', timeout});
        await locator.click();
        console.log(`[safeClick] click successfully | locator : ${locator}`);
    }

    async safeFill(locator:Locator , value:string , timeout = DEFAULT_TIMEOUT){
        console.log(`[safeFill] waiting for element to be visible and fill value : ${value} | locator : ${locator}`);
        await locator.waitFor({state:'visible',timeout});
        await locator.fill(value);
        console.log(`[safeFill] value is filled : ${value} | locator : ${locator}`);

    }

    async safeCheck(locator: Locator, timeout = DEFAULT_TIMEOUT): Promise<void> {
        console.log(`[safeCheck] Waiting for element to be visible and checking | locator: ${locator}`);
        await locator.waitFor({ state: "visible", timeout });
        await locator.check();
        console.log(`[safeCheck] Checkbox checked successfully | locator: ${locator}`);
      }

}