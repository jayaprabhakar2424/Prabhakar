import{test} from '@playwright/test';
test("frames",async({page})=> {
    await page.goto("https://letcode.in/frame");
    let jj=page.frameLocator("#firstFr");
    await jj.getByPlaceholder("Enter name").fill("jayam");
    await jj.getByPlaceholder("Enter email").first().fill("jaya@gmail.com");
    await jj.frameLocator('[src="innerframe"]').locator('[name="email"]').fill("prabhakar@gmail.com");
    await page.waitForTimeout(5000);
})