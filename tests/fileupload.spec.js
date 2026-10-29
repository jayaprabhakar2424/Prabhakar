import{test} from '@playwright/test'
test('upload file',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    //single file upload
    await page.locator('#singleFileInput').setInputFiles('tests/upload/Ex3 Z trns (1) (1) - Shortcut.lnk');
    await page.waitForTimeout(3000);
    //multiple file upload
    await page.locator('#multipleFilesInput').setInputFiles(['tests/upload/Ex3 Z trns (1) (1) - Shortcut.lnk','tests/upload/DSP EXP 3.docx']);
    await page.waitForTimeout(3000);
    //Delete single file
    await page.locator('#multipleFilesInput').setInputFiles(['tests/upload/Ex3 Z trns (1) (1) - Shortcut.lnk']);
    await page.waitForTimeout(3000);
    //Delete All File
    await page.locator('#multipleFilesInput').setInputFiles([]);
    await page.waitForTimeout(3000);
})