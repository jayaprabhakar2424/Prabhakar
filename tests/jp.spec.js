import{test,chromium} from '@playwright/test';
test('submit',async({page})=>{
    await page.goto("https://demoqa.com/text-box");
    await page.locator("#userName").fill("jayaprabhakar");
    await page.locator("#userEmail").fill("jaya.prabhakar22@gmail.com");
    await page.locator("#currentAddress").fill("Erode");
    await page.locator("#permanentAddress").fill("Erode");
    await page.locator("#submit").click();
})