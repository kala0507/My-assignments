/*Edit Lead
http://leaftaps.com/opentaps/control/main			
1. Launch the browser
2. Enter the username
3. Enter the password
4. Click Login
5. Click CRM/SFA link
6. Click Leads link
7. Click on Create Lead
8. Enter company name
9. Enter first name
10.Enter last name
11.Click on Create Lead button  
12.Click Edit
13.Change the company name
14.Click Update
*/

import { test, chromium} from '@playwright/test';
 test(" Edit Lead", async({page})=>{
   await page.goto("http://leaftaps.com/opentaps/control/main");
   await page.fill("#username", 'demosalesmanager');
   await page.fill("input[id='password']", 'crmsfa');
   await page.click("input[value='Login']")
   await page.click("text=CRM/SFA");
   await page.getByRole('link',{name:'Leads'}).click();
   await page.getByRole('link',{name:'Create Lead'}).click();
   await page.fill("#createLeadForm_companyName",'Sunrise');
   await page.fill("input[id='createLeadForm_firstName']", 'Kala');
   await page.fill("input[id='createLeadForm_lastName']",'Thangam');
   await page.click("input[name='submitButton']");
   await page.getByRole('link',{name:'Edit'}).click();
  await page.locator('#updateLeadForm_companyName').clear()
  await page.fill("#updateLeadForm_companyName",'Huawei')
  await page.click("input[class='smallSubmit']")
 })