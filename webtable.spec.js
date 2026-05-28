import{test} from '@playwright/test'

test('table',async({page})=>{
    await page.goto('https://www.tutorialspoint.com/selenium/practice/webtables.php');
    const rows =await page.locator('table tbody tr');
    console.log(await rows.count());
    for(let i=0; i<await rows.count();i++){
        const colms = await rows.nth(i).locator('td');
        for(let j=0;j<await colms.count();j++){
            if(j==1){
                const text = await colms.nth(j).textContent();
            console.log(text);
            }
            
        }
    }
})