# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Organization\create_organization.spec.js >> creating organization 6
- Location: tests\Organization\create_organization.spec.js:68:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('//span[@id="dtlview_Organization Name"]')
Expected: "JPMC453"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" locator('//span[@id="dtlview_Organization Name"]') with timeout 5000ms
  - waiting for locator('//span[@id="dtlview_Organization Name"]')
    - waiting for "http://49.249.29.4:8888/index.php?module=Accounts&action=EditView&return_action=DetailView&parenttab=Marketing" navigation to finish...
    - navigated to "http://49.249.29.4:8888/index.php?module=Accounts&action=EditView&return_action=DetailView&parenttab=Marketing"
    - waiting for "http://49.249.29.4:8888/index.php?action=DetailView&module=Accounts&parenttab=Marketing&record=141418&viewname=0&start=" navigation to finish...
    - navigated to "http://49.249.29.4:8888/index.php?action=DetailView&module=Accounts&parenttab=Marketing&record=141418&viewname=0&start="

```

```yaml
- table:
  - rowgroup:
    - row "vtiger-crm-logo.gif Search... Find ACOE Fireflink":
      - cell "vtiger-crm-logo.gif":
        - img "vtiger-crm-logo.gif"
      - cell "Search... Find":
        - table:
          - rowgroup:
            - row "Search... Find":
              - cell "Search...":
                - textbox: Search...
              - cell:
                - link:
                  - /url: javascript:void(0);
                  - img
              - cell "Find":
                - button "Find"
      - cell "ACOE Fireflink":
        - table:
          - rowgroup:
            - row "ACOE Fireflink":
              - cell "ACOE Fireflink"
              - cell:
                - img
              - cell:
                - img
              - cell:
                - img
- table:
  - rowgroup:
    - row "Calendar Organizations Contacts Opportunities Products Documents Email Trouble Tickets Dashboard Leads More Quick Create...":
      - cell:
        - link:
          - /url: index.php?module=Home&action=index&parenttab=My Home Page
          - img
      - cell "Calendar Organizations Contacts Opportunities Products Documents Email Trouble Tickets Dashboard Leads More Quick Create...":
        - table:
          - rowgroup:
            - row "Calendar Organizations Contacts Opportunities Products Documents Email Trouble Tickets Dashboard Leads More Quick Create...":
              - cell:
                - img
              - cell "Calendar":
                - link "Calendar":
                  - /url: index.php?module=Calendar&action=index
              - cell:
                - img
              - cell "Organizations":
                - link "Organizations":
                  - /url: index.php?module=Accounts&action=index
              - cell:
                - img
              - cell "Contacts":
                - link "Contacts":
                  - /url: index.php?module=Contacts&action=index
              - cell:
                - img
              - cell "Opportunities":
                - link "Opportunities":
                  - /url: index.php?module=Potentials&action=index
              - cell:
                - img
              - cell "Products":
                - link "Products":
                  - /url: index.php?module=Products&action=index
              - cell:
                - img
              - cell "Documents":
                - link "Documents":
                  - /url: index.php?module=Documents&action=index
              - cell:
                - img
              - cell "Email":
                - link "Email":
                  - /url: index.php?module=Emails&action=index
              - cell:
                - img
              - cell "Trouble Tickets":
                - link "Trouble Tickets":
                  - /url: index.php?module=HelpDesk&action=index
              - cell:
                - img
              - cell "Dashboard":
                - link "Dashboard":
                  - /url: index.php?module=Dashboard&action=index
              - cell:
                - img
              - cell "Leads":
                - link "Leads":
                  - /url: index.php?module=Leads&action=index
              - cell:
                - img
              - cell "More":
                - link "More":
                  - /url: javascript:;
                  - text: More
                  - img
              - cell:
                - img
              - cell "Quick Create...":
                - combobox:
                  - option "Quick Create..." [selected]
                  - option "New Organization"
                  - option "New Asset"
                  - option "New To Do"
                  - option "New Campaign"
                  - option "New Comment"
                  - option "New Contact"
                  - option "New Document"
                  - option "New Event"
                  - option "New Ticket"
                  - option "New Lead"
                  - option "New Opportunity"
                  - option "New PriceBook"
                  - option "New Product"
                  - option "New Project"
                  - option "New Project Milestone"
                  - option "New Project Task"
                  - option "New Service Contract"
                  - option "New Service"
                  - option "New Vendor"
      - cell
```

# Test source

```ts
  1   | // import { expect, test } from "@playwright/test";
  2   | 
  3   | // test("creating organization",async({page})=>{
  4   | // // -> Login to vtiger application
  5   | // // -> Click on organizations link
  6   | // // -> Click on create organization lookup image
  7   | // // -> Enter organisation name
  8   | // // -> Click on save Btn
  9   | // // -> Verify whether the organization is created in Organization Information page and Logout from the application.
  10  | //     await page.goto('http://49.249.29.4:8888')
  11  | //     let username="admin"
  12  | //     let password="admin"
  13  | //     await page.locator('//input[@type="text"]').fill(username)
  14  | //     await page.locator('//input[@type="password"]').fill(password)
  15  | //     await page.locator('//input[@type="submit"]').click()
  16  | //     await page.getByText("Organizations").click()
  17  | //     await page.getByTitle("Create Organization...").click()
  18  | //     let organization_name = `Sai,${Math.floor(Math.random()*10000)}`
  19  | //     await page.locator('//input[@name="accountname"]').fill(organization_name)
  20  | //     await page.getByRole("button",{name:"  Save  "}).first().click()
  21  | //     await expect(page.locator('//span[@id="dtlview_Organization Name"]')).toContainText(organization_name)
  22  | 
  23  | 
  24  | // })
  25  | 
  26  | 
  27  | 
  28  | 
  29  | 
  30  | // import { expect, test } from "@playwright/test";
  31  | // import data from "../../Test_data/common_data.json"
  32  | 
  33  | // test("creating organization",async({page})=>{
  34  | // // -> Login to vtiger application
  35  | // // -> Click on organizations link
  36  | // // -> Click on create organization lookup image
  37  | // // -> Enter organisation name
  38  | // // -> Click on save Btn
  39  | // // -> Verify whether the organization is created in Organization Information page and Logout from the application.
  40  | //     await page.goto(data.url)
  41  | //     let username=data.user_name
  42  | //     let password=data.password
  43  | //     await page.locator('//input[@type="text"]').fill(username)
  44  | //     await page.locator('//input[@type="password"]').fill(password)
  45  | //     await page.locator('//input[@type="submit"]').click()
  46  | //     await page.getByText("Organizations").click()
  47  | //     await page.getByTitle("Create Organization...").click()
  48  | //     let organization_name = `Sai,${Math.floor(Math.random()*10000)}`
  49  | //     await page.locator('//input[@name="accountname"]').fill(organization_name)
  50  | //     await page.getByRole("button",{name:"  Save  "}).first().click()
  51  | //     await expect(page.locator('//span[@id="dtlview_Organization Name"]')).toContainText(organization_name)
  52  | 
  53  | 
  54  | // })
  55  | 
  56  | 
  57  | //? using POM 
  58  | 
  59  | 
  60  | import { expect, test } from "@playwright/test";
  61  | import { LoginPage } from "../../pages/login_page";
  62  | import { DashBoardPage } from "../../pages/dashboard";
  63  | import { Organization } from "../../pages/organization";
  64  | import { Workbook } from "exceljs";
  65  | import path from "node:path";
  66  | import { readExcel } from "../../utilities/Excel_utility";
  67  | for (let i=2;i<=6;i++){
  68  | test(`creating organization ${i}`,async({page})=>{
  69  |     test.slow()
  70  | // -> Login to vtiger application
  71  | // -> Click on organizations link
  72  | // -> Click on create organization lookup image
  73  | // -> Enter organisation name
  74  | // -> Click on save Btn
  75  | // -> Verify whether the organization is created in Organization Information page and Logout from the application.
  76  | 
  77  |    let ln=new LoginPage(page)
  78  |    await ln.login()
  79  | 
  80  | 
  81  |    let db=new DashBoardPage(page)
  82  |    await db.clickOrganization()
  83  | 
  84  | 
  85  | //    let book = new Workbook()
  86  | //        await book.xlsx.readFile(path.join(__dirname,"../../Test_data/test_script_data.xlsx"))
  87  | //        let sheet = book.getWorksheet("Organization")
  88  | //        let organization = sheet.getRow(2).getCell(2).toString() + Math.floor(Math.random()*1000)
  89  |    let organization =  await readExcel("Organization",i,2)+ Math.floor(Math.random()*1000)
  90  | 
  91  | 
  92  |    let CO = new Organization(page)
  93  |    await CO.createOrganization(organization)
  94  |     
  95  | 
> 96  |    await expect(page.locator('//span[@id="dtlview_Organization Name"]')).toHaveText(organization)
      |                                                                          ^ Error: expect(locator).toHaveText(expected) failed
  97  | 
  98  | 
  99  | })
  100 | }
```