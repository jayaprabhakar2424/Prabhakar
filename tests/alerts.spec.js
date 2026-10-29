import{test} from '@playwright/test';
test("Alerts",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    page.on("dialog",async(n)=>{
        console.log(n.type());
        console.log(n.message());
        await page.waitForTimeout(3000);
        await n.dismiss();  
    })
    //  await page.locator("#alertBtn").click();
    // await page.locator("#confirmBtn").click();
    await page.locator("#promptBtn").click();
    await page.waitForTimeout(5000);
})