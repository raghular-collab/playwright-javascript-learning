import{test } from '@playwright/test';

test.only('file handling',async({page})=>{
    await page.goto('https://demoqa.com/upload-download');

    await page.locator('#uploadFile').setInputFiles('/Users/raghular/fileupload.html');
    await page.waitForTimeout(2000);
    //to delete uploaded file
    //await page.locator('#uploadFile').setInputFiles([]);
    //await page.waitForTimeout(2000);
    //download a file
    
    const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.locator('#downloadButton').click()
    ]);
    await download.saveAs('/Users/raghular/file.txt');
});


test('multiple file handling',async({page})=>{
    await page.goto('https://blueimp.github.io/jQuery-File-Upload/');

    await page.locator('input[type="file"]').setInputFiles([
        '/Users/raghular/fileupload.html',
        '/Users/raghular/fileupload1.html'
    ]);
    await page.waitForTimeout(2000);
    //to delete a specific file from multiple uploads
    await page.locator('input[type="file"]').setInputFiles(['/Users/raghular/fileupload1.html','/Users/raghular/fileupload.html']);
    await page.waitForTimeout(2000);
    await page.locator('input[type="file"]').setInputFiles('/Users/raghular/fileupload2.html');
    await page.waitForTimeout(5000);
});