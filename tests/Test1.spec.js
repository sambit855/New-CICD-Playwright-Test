import {test,expect} from '@playwright/test';
import { constants } from 'node:buffer';
test('datepicker', async ({page})=> {

await page.goto('https://www.way2automation.com/way2auto_jquery/datepicker.php#load_box');

await page.click("//div[@id='example-1-tab-1']//iframe[@class='demo-frame']");

const month = 'May';
const year = '2023';
const date = '27';

while(true)
{
   const CurrentMonth =  await page.locator("//div[@id='example-1-tab-2']//iframe[@class='demo-frame']").textContent();
   const Currentyear = await page.locator("//div[@id='example-1-tab-1']//iframe[@class='demo-frame']").textContent();

   if(CurrentMonth== month && Currentyear==year);
   {
    break;
   }
   await  page.click("//a[@title='Next']");

}
const dates = await page.$$("//a[@class='ui-state-default']")
for(const dt of dates)
{
   if( await dt.textContent()==date);
   {
    await dt.click();
    break;
   }
}


})