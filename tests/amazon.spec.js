import{test,chromium} from '@playwright/test'
test('amazon',async({page})=>
{
 await page.goto("https://www.amazon.com/");
 await page.getByLabel("iphone 17 pro max case").press("enter");
 await page.screenshot({path: "visiblepage.jpeg"});
//  await page.locator("#navBackToTop").click();
 await page.waitForTimeout(3000);
}
)