/**
 * Test Steps:
1. Login to https://login.salesforce.com
2. Click on toggle menu button from the left corner
3. Click view All and click Sales from App Launcher
4. Click on Accounts tab 
5. Click on New button
6. Enter 'your name' as account name
7. Select Ownership as Public                                               
8. Click save and verify Account name 
 * 
 * 
 * 
 */

import {test, chromium, expect}from"@playwright/test";
test("Salesforce", async({page})=>{
    test.setTimeout(120000);
    //Login to https://login.salesforce.com
    await page.goto("https://login.salesforce.com");
    await page.fill("#username",'pusphakala.thangam@gmail.com');
    await page.fill("#password",'Marx2014@');
    await page.click("#Login");
//Click on toggle menu button from the left corner
    await page.locator(".slds-icon-waffle").click();
//Click view All
    await page.getByText("View All").click();
   await page.waitForLoadState('load');
//click sales from App Launcher
    await page.click("//p[text()='Sales']");
//Click on Accounts tab 
    await page.click("[title='Accounts']");
// Click on New button
    await page.click("div[title='New']");
   // await page.pause();
//Enter 'your name' as account name
   const accountName= await page.locator("[name='Name']");
    await expect(accountName).toBeEnabled()
    await accountName.fill("Marx");
//Select Ownership as Public

await page.locator('[data-value="--None--"]').nth(2).click();

});