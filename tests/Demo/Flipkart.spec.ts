import {test, expect, FrameLocator, Locator} from '@playwright/test';

test('flipkartLogin', async ({ page }) => {
    await page.goto('https://www.flipkart.com/');
    
    await page.waitForTimeout(5000);
    await page.locator("form[action='/search']>div>div>input").fill("iphone 14");
     await page.waitForTimeout(5000);

   const list:Locator=  page.locator("ul>li");
   const listCount=   await list.count();
   console.log("listCount: "+listCount);

     await page.waitForTimeout(5000);
 
   //  console.log("Second index value--->"+ await list.nth(1).textContent());
   console.log("Second index value--->"+ await list.nth(1).innerText());

   console.log("List of values are below:");

   for(let i=0;i<listCount;i++){
    const text = await list.nth(i).innerText();
    console.log("Value--->"+ text);

    if(text == "iphone 14"){

        await list.nth(i).click();
        break;
    }
   }
 await page.waitForTimeout(5000);

});
