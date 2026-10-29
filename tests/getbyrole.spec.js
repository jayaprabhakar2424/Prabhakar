import{test,expect} from '@playwright/test';
test("getByRole",async({page})=>{
    await page.goto("https://practice.expandtesting.com/locators");
    await page.getByRole("button",{name:"Add Item"}).click();
    // await page.getByRole("link",{name:"Contact"}).click();
    console.log(await page.getByRole("heading",{name:"getByPlaceholder"}).innerText());
    console.log(await page.getByAltText("User avatar").isVisible());
    await page.waitForTimeout(5000);
    const text=await page.getByTestId("status-message").innerText();
    await expect(text).toContain("All systems operational");
    await page.waitForTimeout(5000);

})