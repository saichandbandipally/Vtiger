// import { expect, test } from "@playwright/test";

//! Modular framework
// test("contact creation",async({page})=>{
// //  Login to vtiger application
// // -> Click on Contacts link
// // -> Click on create contact lookup image
// // -> Enter FirstName with title dropdown and LastName
// // -> Select Lead Source to Employee
// // -> Choose Support End date as  October 30 2029
// // -> Click on save Btn
// // -> Verify whether the Contact is created with firstName and LastName in Contact Information page and Logout from the application.
//     await page.goto('http://49.249.29.4:8888')
//     let username="admin"
//     let password="admin"
//     await page.locator('//input[@type="text"]').fill(username)
//     await page.locator('//input[@type="password"]').fill(password)
//     await page.locator('//input[@type="submit"]').click()
//     await page.getByText("Contacts").click()
//     await page.getByTitle("Create Contact...").click()
//     await page.locator('//select[@name="salutationtype"]').selectOption("Mr.")
//     let first_name ="sai chand"
//     let last_name ="bandipally"
//     await page.locator('//input[@name="firstname"]').fill(first_name)
//     await page.locator('//input[@name="lastname"]').fill(last_name)
//     await page.locator('//select[@name="leadsource"]').selectOption("Employee")
//     await page.locator('//img[@id="jscal_trigger_support_end_date"]').click()
//     let month
//     while (true) {
//         month =  await page.locator('//td[@class="title"]').textContent()
//         if (month=="October, 2029") {
//             await page.locator('//td[text()="30" and @class="day" ]').click()
//             break    
//         }
//         else{
//         await page.getByRole('cell', { name: '›' }).click()
//         }

        
        
//     }
    
//     await page.locator('(//input[@title="Save [Alt+S]"])[1]').click()
//     await  expect(page.locator('//span[@id="dtlview_First Name"]')).toHaveText(first_name)
//     await expect(page.locator('//span[@id="dtlview_Last Name"]')).toHaveText(last_name)
    

    

   
// })




// //! Data driven Framework with json
// import { expect, test } from "@playwright/test";
// import data from "../../Test_data/common_data.json"


// test("contact creation",async({page})=>{
// //  Login to vtiger application
// // -> Click on Contacts link
// // -> Click on create contact lookup image
// // -> Enter FirstName with title dropdown and LastName
// // -> Select Lead Source to Employee
// // -> Choose Support End date as  October 30 2029
// // -> Click on save Btn
// // -> Verify whether the Contact is created with firstName and LastName in Contact Information page and Logout from the application.
//     await page.goto(data.url)
//     let username=data.user_name
//     let password=data.password
//     await page.locator('//input[@type="text"]').fill(username)
//     await page.locator('//input[@type="password"]').fill(password)
//     await page.locator('//input[@type="submit"]').click()
//     await page.getByText("Contacts").click()
//     await page.getByTitle("Create Contact...").click()
//     await page.locator('//select[@name="salutationtype"]').selectOption("Mr.")
//     let first_name ="sai chand"
//     let last_name ="bandipally"
//     await page.locator('//input[@name="firstname"]').fill(first_name)
//     await page.locator('//input[@name="lastname"]').fill(last_name)
//     await page.locator('//select[@name="leadsource"]').selectOption("Employee")
//     await page.locator('//img[@id="jscal_trigger_support_end_date"]').click()
//     let month
//     while (true) {
//         month =  await page.locator('//td[@class="title"]').textContent()
//         if (month=="October, 2029") {
//             await page.locator('//td[text()="30" and @class="day" ]').click()
//             break    
//         }
//         else{
//         await page.getByRole('cell', { name: '›' }).click()
//         }

        
        
//     }
    
//     await page.locator('(//input[@title="Save [Alt+S]"])[1]').click()
//     await  expect(page.locator('//span[@id="dtlview_First Name"]')).toHaveText(first_name)
//     await expect(page.locator('//span[@id="dtlview_Last Name"]')).toHaveText(last_name)
    

    

   
// })


//! Data driven Framework with json  with excel 
// import { expect, test } from "@playwright/test";
// import data from "../../Test_data/common_data.json"
// import { Workbook } from "exceljs";
// import path from "node:path";
// for (let i=2;i<=8;i++)
    
// {

// test(`contact creation ${i}`,async({page})=>{
// //  Login to vtiger application
// // -> Click on Contacts link
// // -> Click on create contact lookup image
// // -> Enter FirstName with title dropdown and LastName
// // -> Select Lead Source to Employee
// // -> Choose Support End date as  October 30 2029
// // -> Click on save Btn
// // -> Verify whether the Contact is created with firstName and LastName in Contact Information page and Logout from the application.
//     await page.goto(data.url)
//     let username=data.user_name
//     let password=data.password
//     await page.locator('//input[@type="text"]').fill(username)
//     await page.locator('//input[@type="password"]').fill(password)
//     await page.locator('//input[@type="submit"]').click()


//     //? Reading data from excel sheet 
//     let book = new Workbook()
//     await book.xlsx.readFile(path.join(__dirname,"../../Test_data/test_script_data.xlsx"))
//     let sheet = book.getWorksheet("Contact")
//     let Title = sheet.getRow(i).getCell(2).toString()
//     let first_name = sheet.getRow(i).getCell(3).toString()
//     let last_name = sheet.getRow(i).getCell(4).toString()
//     let leadsource = sheet.getRow(i).getCell(5).toString()
//     let mon =  sheet.getRow(i).getCell(6).toString()
//     let year =  sheet.getRow(i).getCell(7).toString()
//     let date = `${mon}, ${year}`
//     let day = sheet.getRow(i).getCell(8).toString()

//     await page.getByRole('link', { name: 'Contacts' }).click()
//     await page.getByTitle("Create Contact...").click()
//     await page.locator('//select[@name="salutationtype"]').selectOption(Title)
// //    let  first_name ="sai chand"
// //     let last_name ="bandipally"
//     await page.locator('//input[@name="firstname"]').fill(first_name)
//     await page.locator('//input[@name="lastname"]').fill(last_name)
//     await page.locator('//select[@name="leadsource"]').selectOption(leadsource)
//     await page.locator('//img[@id="jscal_trigger_support_end_date"]').click()
//     let month
//     while (true) {
//         month =  await page.locator('//td[@class="title"]').textContent()
//         if (month==date) {
//             await page.locator(`//td[text()="${day}" and @class="day" ]`).click()
//             break    
//         }
//         else{
//         await page.getByRole('cell', { name: '›' }).click()
//         }

        
        
//     }
    
//     await page.locator('(//input[@title="Save [Alt+S]"])[1]').click()
//     await  expect(page.locator('//span[@id="dtlview_First Name"]')).toHaveText(first_name)
//     await expect(page.locator('//span[@id="dtlview_Last Name"]')).toHaveText(last_name)
    

    

   
// })
// }




// import { expect, test } from "@playwright/test";
// import { LoginPage } from "../../pages/login_page";
// import { Workbook } from "exceljs";
// import { Contact } from "../../pages/contact";
// import path from "node:path";
// import { DashBoardPage } from "../../pages/dashboard";
// for (let i=2;i<=6;i++)
    
// {

// test(`contact creation ${i}`,async({page})=>{
//     test.slow()
   
//    let ln = new LoginPage(page)
//    await ln.login()

//     //? Reading data from excel sheet 
//     let book = new Workbook()
//     await book.xlsx.readFile(path.join(__dirname,"../../Test_data/test_script_data.xlsx"))
//     let sheet = book.getWorksheet("Contact")
//     let Title = sheet.getRow(i).getCell(2).toString()
//     let first_name = sheet.getRow(i).getCell(3).toString()
//     let last_name = sheet.getRow(i).getCell(4).toString()
//     let leadsource = sheet.getRow(i).getCell(5).toString()
//     let mon =  sheet.getRow(i).getCell(6).toString()
//     let year =  sheet.getRow(i).getCell(7).toString()
//     let date = `${mon}, ${year}`
//     let day = sheet.getRow(i).getCell(8).toString()


//     let db=new DashBoardPage(page)
//     await db.clickContact()


//     let createcontact= new Contact(page)
//     await  createcontact.createContact(Title,first_name,last_name,leadsource)
//     await  createcontact.selectDate(date,day)
//     await  createcontact.save()
    

    
//     //! assertions 
//     await  expect(page.locator('//span[@id="dtlview_First Name"]')).toHaveText(first_name)
//     await expect(page.locator('//span[@id="dtlview_Last Name"]')).toHaveText(last_name)
    

    

   
// })
// }



import { expect, test } from "../../Hooks/logInLogout"
import { Workbook } from "exceljs";
import { Contact } from "../../pages/contact";
import path from "node:path";
import { DashBoardPage } from "../../pages/dashboard";
for (let i=2;i<=6;i++)
    
{

test(`contact creation ${i}`,async({page})=>{
    test.slow()
   
   

    //? Reading data from excel sheet 
    let book = new Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../../Test_data/test_script_data.xlsx"))
    let sheet = book.getWorksheet("Contact")
    let Title = sheet.getRow(i).getCell(2).toString()
    let first_name = sheet.getRow(i).getCell(3).toString()
    let last_name = sheet.getRow(i).getCell(4).toString()
    let leadsource = sheet.getRow(i).getCell(5).toString()
    let mon =  sheet.getRow(i).getCell(6).toString()
    let year =  sheet.getRow(i).getCell(7).toString()
    let date = `${mon}, ${year}`
    let day = sheet.getRow(i).getCell(8).toString()


    let db=new DashBoardPage(page)
    await db.clickContact()


    let createcontact= new Contact(page)
    await  createcontact.createContact(Title,first_name,last_name,leadsource)
    await  createcontact.selectDate(date,day)
    await  createcontact.save()
    

    
    //! assertions 
    await  expect(page.locator('//span[@id="dtlview_First Name"]')).toHaveText(first_name)
    await expect(page.locator('//span[@id="dtlview_Last Name"]')).toHaveText(last_name)
    

    

   
})
}