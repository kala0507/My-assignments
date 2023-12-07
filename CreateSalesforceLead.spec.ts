/*Assignment: 1 Create Lead
1. Login to https://login.salesforce.com
2. Click on toggle menu button from the left corner
3. Click view All and click Sales from App Launcher
4. Click on Leads tab 
5. Click on New button
6. Select Salutation dropdown
7. Enter the Last Name
8. Enter the CompanyName 
9. Click Save and Verify Leads name created*/

import{ test, expect,chromium}from '@playwright/test'
test("Create Newlead", async( {page})=>{
    test.setTimeout(120000);
    //Login to https://login.salesforce.com
   await page.goto("https://login.salesforce.com");
   await page.fill("#username",'pusphakala.thangam@gmail.com');
   await page.fill("#password",'Marx2014@')
   await page.click("#Login");
   // Click on toggle menu button from the left corne
   await page.getByRole('button',{name:'AppLauncher'}).click();

   //Click view All 
   await page.getByRole('button',{name:'View All Applications'}).click();
   //click Sales from App Launcher
   await page.locator('//p[text()="Sales"]').click();

   //Click on Leads tab 
   await page.locator('//span[text()="Leads"]').click();
  //Click on New button
   await page.getByRole('button',{name: 'New'} ).click();
  //Select Salutation dropdown
   await page.click(".slds-combobox__input");
   await page.getByTitle("Mr.").click();
   //Enter the Last Name
   await page.getByPlaceholder('Last Name').fill('Thangam');
   //Enter the CompanyName 
   await page.fill("input[class='slds-input']",'Sunrise');
   //Click Save
   await page.getByRole('button',{name:'SaveEdit'}).click();
  const leadname = await page.getByText('Lead').innerText();
  console.log(leadname);
  // verify the lead name
  expect(leadname).toBe('Mrs.Thangam');
})