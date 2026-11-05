// import { expect, test } from "@playwright/test";
// test("create link",async({page})=>{

// //  4. Test Case-4
// // -> Login to vtiger application
// // -> Click on Leads link
// // -> Click on create lead lookup image
// // -> Enter FirstName along  with dropdown ,  LastName and companyName
// // -> Click on save Btn
// // -> Verify whether the Lead is created with LastName and CompanyName in Lead Information page and Logout from the application.
//     await page.goto('http://49.249.29.4:8888')
//     let username="admin"
//     let password="admin"
//     await page.locator('//input[@type="text"]').fill(username)
//     await page.locator('//input[@type="password"]').fill(password)
//     await page.locator('//input[@type="submit"]').click()    
//     await page.getByText("Leads").click()
//     await page.getByTitle("Create Lead...").click()
//     await page.locator('//select[@name="salutationtype"]').selectOption("Mr.")
//     let first_name ="sai chand"
//     let last_name ="bandipally"
//     let company_name="cognizant"
//     await page.locator('//input[@name="firstname"]').fill(first_name)
//     await page.locator('//input[@name="lastname"]').fill(last_name)  
//     await page.locator('//input[@name="company"]').fill(company_name)
//     await page.getByRole("button",{name:"  Save  "}).first().click()
//     await expect(page.locator('//span[@id="dtlview_Last Name"]')).toHaveText(last_name)
//     await page.getByRole('img').nth(2).hover()
//     await page.getByRole('link', { name: 'Sign Out' }).click()





// })

//! Data driven framework using json

// import { expect, test } from "@playwright/test";
// import data from "../../Test_data/common_data.json"
// test("create link",async({page})=>{

// //  4. Test Case-4
// // -> Login to vtiger application
// // -> Click on Leads link
// // -> Click on create lead lookup image
// // -> Enter FirstName along  with dropdown ,  LastName and companyName
// // -> Click on save Btn
// // -> Verify whether the Lead is created with LastName and CompanyName in Lead Information page and Logout from the application.
//     await page.goto(data.url)
//     let username=data.user_name
//     let password=data.password
//     await page.locator('//input[@type="text"]').fill(username)
//     await page.locator('//input[@type="password"]').fill(password)
//     await page.locator('//input[@type="submit"]').click()    
//     await page.getByText("Leads").click()
//     await page.getByTitle("Create Lead...").click()
//     await page.locator('//select[@name="salutationtype"]').selectOption("Mr.")
//     let first_name ="sai chand"
//     let last_name ="bandipally"
//     let company_name="cognizant"
//     await page.locator('//input[@name="firstname"]').fill(first_name)
//     await page.locator('//input[@name="lastname"]').fill(last_name)  
//     await page.locator('//input[@name="company"]').fill(company_name)
//     await page.getByRole("button",{name:"  Save  "}).first().click()
import { expect, test } from "@playwright/test";
import { LoginPage } from "../../pages/login_page";
import { Workbook } from "exceljs";
import { Contact } from "../../pages/contact";
import path from "node:path";
import { DashBoardPage } from "../../pages/dashboard";
import { Leads } from "../../pages/leads";
import { title } from "node:process";
import { readExcel } from "../../utilities/Excel_utility";
for (let i=2;i<=6;i++)
    
{

test(`lead creation ${i}`,async({page})=>{
    test.slow()

  //? invoking login method from loginPage class
   let ln = new LoginPage(page)
   await ln.login()

    //? Reading data from excel sheet using utilities 
    
    let Title = await readExcel("Leads",i,2)
    let first_name = await  readExcel("Leads",i,3)
    let last_name = await  readExcel("Leads",i,4)
    let leadsource = await  readExcel("Leads",i,5)
    let mon =  await  readExcel("Leads",i,6)
    let year =   await readExcel("Leads",i,7)
    let date = `${mon}, ${year}`
    let day = await  readExcel("Leads",i,8)
    let company=  await readExcel("Leads",i,9)

    //? invoking clickLeads function from DashBoardPage Class
    let db=new DashBoardPage(page)
    await db.clickLeads()

    //? involing create leads function from Leads page class to fill the details and save 
    let createLeads=new Leads(page)
    await createLeads.createLead(Title,first_name,last_name,company)
    
    //? Validating whether leads are saved or not using assertions 
    await expect(page.locator('//span[@id="dtlview_Last Name"]')).toHaveText(last_name)

    //? Logging out from the application 
    await page.getByRole('img').nth(2).hover()
    await page.getByRole('link', { name: 'Sign Out' }).click()





}) }