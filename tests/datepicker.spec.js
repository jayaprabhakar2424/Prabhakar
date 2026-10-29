import{test} from '@playwright/test'
test('datepicker',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    // datepicker
    const yr = "2030";
    const month = "July";
    const date = "14";
    await page.locator("//input[@id='datepicker']").click();
    while(true){
        const currentyr = await page.locator('.ui-datepicker-year').textContent();
        const currentmonth = await page.locator('.ui-datepicker-month').textContent();
        if(currentyr == yr && currentmonth == month){
            break;
        }
       await page.getByTitle('Next').click(); 
       
    }
         
    //date selection
        // const dates = await page.$$('.ui-datepicker-calendar tbody tr a');
        await page.locator('//a[text()=14]').click();
        await page.waitForTimeout(3000);
    
})