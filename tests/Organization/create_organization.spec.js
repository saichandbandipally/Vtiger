// import { expect, test } from "@playwright/test";

// test("creating organization",async({page})=>{
// // -> Login to vtiger application
// // -> Click on organizations link
// // -> Click on create organization lookup image
// // -> Enter organisation name
// // -> Click on save Btn
// // -> Verify whether the organization is created in Organization Information page and Logout from the application.
//     await page.goto('http://49.249.29.4:8888')
//     let username="admin"
//     let password="admin"
//     await page.locator('//input[@type="text"]').fill(username)
//     await page.locator('//input[@type="password"]').fill(password)
//     await page.locator('//input[@type="submit"]').click()
//     await page.getByText("Organizations").click()
//     await page.getByTitle("Create Organization...").click()
//     let organization_name = `Sai,${Math.floor(Math.random()*10000)}`
//     await page.locator('//input[@name="accountname"]').fill(organization_name)
//     await page.getByRole("button",{name:"  Save  "}).first().click()
//     await expect(page.locator('//span[@id="dtlview_Organization Name"]')).toContainText(organization_name)


// })





// import { expect, test } from "@playwright/test";
// import data from "../../Test_data/common_data.json"

// test("creating organization",async({page})=>{
// // -> Login to vtiger application
// // -> Click on organizations link
// // -> Click on create organization lookup image
// // -> Enter organisation name
// // -> Click on save Btn
// // -> Verify whether the organization is created in Organization Information page and Logout from the application.
//     await page.goto(data.url)
//     let username=data.user_name
//     let password=data.password
//     await page.locator('//input[@type="text"]').fill(username)
//     await page.locator('//input[@type="password"]').fill(password)
//     await page.locator('//input[@type="submit"]').click()
//     await page.getByText("Organizations").click()
//     await page.getByTitle("Create Organization...").click()
//     let organization_name = `Sai,${Math.floor(Math.random()*10000)}`
//     await page.locator('//input[@name="accountname"]').fill(organization_name)
//     await page.getByRole("button",{name:"  Save  "}).first().click()
//     await expect(page.locator('//span[@id="dtlview_Organization Name"]')).toContainText(organization_name)


// })


//? using POM 


import { expect, test } from "@playwright/test";
import { LoginPage } from "../../pages/login_page";
import { DashBoardPage } from "../../pages/dashboard";
import { Organization } from "../../pages/organization";
import { Workbook } from "exceljs";
import path from "node:path";
import { readExcel } from "../../utilities/Excel_utility";
for (let i=2;i<=6;i++){
test(`creating organization ${i}`,async({page})=>{
    test.slow()
// -> Login to vtiger application
// -> Click on organizations link
// -> Click on create organization lookup image
// -> Enter organisation name
// -> Click on save Btn
// -> Verify whether the organization is created in Organization Information page and Logout from the application.

   let ln=new LoginPage(page)
   await ln.login()


   let db=new DashBoardPage(page)
   await db.clickOrganization()


//    let book = new Workbook()
//        await book.xlsx.readFile(path.join(__dirname,"../../Test_data/test_script_data.xlsx"))
//        let sheet = book.getWorksheet("Organization")
//        let organization = sheet.getRow(2).getCell(2).toString() + Math.floor(Math.random()*1000)
   let organization =  await readExcel("Organization",i,2)+ Math.floor(Math.random()*1000)


   let CO = new Organization(page)
   await CO.createOrganization(organization)
    
   await page.waitForTimeout(2000)
   await expect(page.locator('//span[@id="dtlview_Organization Name"]')).toHaveText(organization)


})
}