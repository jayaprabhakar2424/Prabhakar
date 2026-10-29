import{test} from '@playwright/test';
test("google login",async({page})=>{
    await page.goto("https://www.google.com/");
    await page.getByRole("combobox").fill("tamilnadu");
    await page.screenshot({path: "Visiblepage.png"});
    await page.getByRole("combobox").press("Enter");
    await page.waitForTimeout(3000);
    // await page.getByRole("listbox").first().waitFor();
    // console.log(await page.getByRole("listbox").first().allInnerTexts());
})