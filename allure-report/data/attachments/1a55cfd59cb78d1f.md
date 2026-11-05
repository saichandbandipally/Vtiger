# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Organization\create_organization.spec.js >> creating organization 5
- Location: tests\Organization\create_organization.spec.js:68:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('//span[@id="dtlview_Organization Name"]')
Expected: "Accenture795"
Error: element(s) not found

Call log:
  - Expect "toHaveText" locator('//span[@id="dtlview_Organization Name"]') with timeout 5000ms
  - waiting for locator('//span[@id="dtlview_Organization Name"]')
    - waiting for "http://49.249.29.4:8888/index.php?module=Accounts&action=EditView&return_action=DetailView&parenttab=Marketing" navigation to finish...
    - navigated to "http://49.249.29.4:8888/index.php?module=Accounts&action=EditView&return_action=DetailView&parenttab=Marketing"
  - Target page, context or browser has been closed

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
- table:
  - rowgroup:
    - row:
      - cell
    - row "Organizations Create Organization... Open Calendar... Show World Clock... Open Calculator... Chat... Last Viewed Import Organizations Export Organizations Organizations Settings":
      - cell "Organizations":
        - link "Organizations":
          - /url: index.php?action=ListView&module=Accounts&parenttab=Marketing
      - cell "Create Organization... Open Calendar... Show World Clock... Open Calculator... Chat... Last Viewed Import Organizations Export Organizations Organizations Settings":
        - table:
          - rowgroup:
            - row "Create Organization... Open Calendar... Show World Clock... Open Calculator... Chat... Last Viewed Import Organizations Export Organizations Organizations Settings":
              - cell
              - cell "Create Organization...":
                - table:
                  - rowgroup:
                    - row "Create Organization...":
                      - cell "Create Organization...":
                        - table:
                          - rowgroup:
                            - row "Create Organization...":
                              - cell "Create Organization...":
                                - link "Create Organization...":
                                  - /url: index.php?module=Accounts&action=EditView&return_action=DetailView&parenttab=Marketing
                                  - img "Create Organization..."
                              - cell:
                                - img
              - cell
              - cell "Open Calendar... Show World Clock... Open Calculator... Chat... Last Viewed":
                - table:
                  - rowgroup:
                    - row "Open Calendar... Show World Clock... Open Calculator... Chat... Last Viewed":
                      - cell "Open Calendar...":
                        - link "Open Calendar...":
                          - /url: javascript:;
                          - img "Open Calendar..."
                      - cell "Show World Clock...":
                        - link "Show World Clock...":
                          - /url: javascript:;
                          - img "Show World Clock..."
                      - cell "Open Calculator...":
                        - link "Open Calculator...":
                          - /url: "#"
                          - img "Open Calculator..."
                      - cell "Chat...":
                        - link "Chat...":
                          - /url: javascript:;
                          - img "Chat..."
                      - cell "Last Viewed":
                        - img "Last Viewed"
              - cell
              - cell "Import Organizations Export Organizations":
                - table:
                  - rowgroup:
                    - row "Import Organizations Export Organizations":
                      - cell "Import Organizations":
                        - link "Import Organizations":
                          - /url: index.php?module=Accounts&action=Import&step=1&return_module=Accounts&return_action=index&parenttab=Marketing
                          - img "Import Organizations"
                      - cell "Export Organizations":
                        - link "Export Organizations":
                          - /url: javascript:void(0)
                          - img "Export Organizations"
                      - cell:
                        - img
              - cell
              - cell "Organizations Settings":
                - table:
                  - rowgroup:
                    - row "Organizations Settings":
                      - cell "Organizations Settings":
                        - link "Organizations Settings":
                          - /url: index.php?module=Settings&action=ModuleManager&module_settings=true&formodule=Accounts&parenttab=Settings
                          - img "Organizations Settings"
- table:
  - rowgroup:
    - 'row "Creating New Organization Organization Information Save Cancel Organization Information *Organization Name Organization No AUTO GEN ON SAVE Website Phone Ticker Symbol Fax Member Of Select Clear Other Phone Employees Email Other Email Ownership Industry --None-- Rating --None-- Type --None-- SIC Code Email Opt Out Annual Revenue: ($) 0 *Assigned To User Group ACOE Fireflink Notify Owner Address Information Copy Shipping address Copy Billing address Billing Address Shipping Address Billing PO Box Shipping PO Box Billing City Shipping City Billing State Shipping State Billing Postal Code Shipping Postal Code Billing Country Shipping Country Description Information Description Save Cancel"':
      - cell:
        - img
      - 'cell "Creating New Organization Organization Information Save Cancel Organization Information *Organization Name Organization No AUTO GEN ON SAVE Website Phone Ticker Symbol Fax Member Of Select Clear Other Phone Employees Email Other Email Ownership Industry --None-- Rating --None-- Type --None-- SIC Code Email Opt Out Annual Revenue: ($) 0 *Assigned To User Group ACOE Fireflink Notify Owner Address Information Copy Shipping address Copy Billing address Billing Address Shipping Address Billing PO Box Shipping PO Box Billing City Shipping City Billing State Shipping State Billing Postal Code Shipping Postal Code Billing Country Shipping Country Description Information Description Save Cancel"':
        - text: Creating New Organization
        - separator
        - table:
          - rowgroup:
            - row "Organization Information":
              - cell "Organization Information":
                - table:
                  - rowgroup:
                    - row "Organization Information":
                      - cell
                      - cell "Organization Information"
                      - cell
                      - cell
            - 'row "Save Cancel Organization Information *Organization Name Organization No AUTO GEN ON SAVE Website Phone Ticker Symbol Fax Member Of Select Clear Other Phone Employees Email Other Email Ownership Industry --None-- Rating --None-- Type --None-- SIC Code Email Opt Out Annual Revenue: ($) 0 *Assigned To User Group ACOE Fireflink Notify Owner Address Information Copy Shipping address Copy Billing address Billing Address Shipping Address Billing PO Box Shipping PO Box Billing City Shipping City Billing State Shipping State Billing Postal Code Shipping Postal Code Billing Country Shipping Country Description Information Description Save Cancel"':
              - 'cell "Save Cancel Organization Information *Organization Name Organization No AUTO GEN ON SAVE Website Phone Ticker Symbol Fax Member Of Select Clear Other Phone Employees Email Other Email Ownership Industry --None-- Rating --None-- Type --None-- SIC Code Email Opt Out Annual Revenue: ($) 0 *Assigned To User Group ACOE Fireflink Notify Owner Address Information Copy Shipping address Copy Billing address Billing Address Shipping Address Billing PO Box Shipping PO Box Billing City Shipping City Billing State Shipping State Billing Postal Code Shipping Postal Code Billing Country Shipping Country Description Information Description Save Cancel"':
                - table:
                  - rowgroup:
                    - 'row "Save Cancel Organization Information *Organization Name Organization No AUTO GEN ON SAVE Website Phone Ticker Symbol Fax Member Of Select Clear Other Phone Employees Email Other Email Ownership Industry --None-- Rating --None-- Type --None-- SIC Code Email Opt Out Annual Revenue: ($) 0 *Assigned To User Group ACOE Fireflink Notify Owner Address Information Copy Shipping address Copy Billing address Billing Address Shipping Address Billing PO Box Shipping PO Box Billing City Shipping City Billing State Shipping State Billing Postal Code Shipping Postal Code Billing Country Shipping Country Description Information Description Save Cancel"':
                      - 'cell "Save Cancel Organization Information *Organization Name Organization No AUTO GEN ON SAVE Website Phone Ticker Symbol Fax Member Of Select Clear Other Phone Employees Email Other Email Ownership Industry --None-- Rating --None-- Type --None-- SIC Code Email Opt Out Annual Revenue: ($) 0 *Assigned To User Group ACOE Fireflink Notify Owner Address Information Copy Shipping address Copy Billing address Billing Address Shipping Address Billing PO Box Shipping PO Box Billing City Shipping City Billing State Shipping State Billing Postal Code Shipping Postal Code Billing Country Shipping Country Description Information Description Save Cancel"':
                        - table:
                          - rowgroup:
                            - row:
                              - cell
                            - 'row "Save Cancel Organization Information *Organization Name Organization No AUTO GEN ON SAVE Website Phone Ticker Symbol Fax Member Of Select Clear Other Phone Employees Email Other Email Ownership Industry --None-- Rating --None-- Type --None-- SIC Code Email Opt Out Annual Revenue: ($) 0 *Assigned To User Group ACOE Fireflink Notify Owner Address Information Copy Shipping address Copy Billing address Billing Address Shipping Address Billing PO Box Shipping PO Box Billing City Shipping City Billing State Shipping State Billing Postal Code Shipping Postal Code Billing Country Shipping Country Description Information Description Save Cancel"':
                              - 'cell "Save Cancel Organization Information *Organization Name Organization No AUTO GEN ON SAVE Website Phone Ticker Symbol Fax Member Of Select Clear Other Phone Employees Email Other Email Ownership Industry --None-- Rating --None-- Type --None-- SIC Code Email Opt Out Annual Revenue: ($) 0 *Assigned To User Group ACOE Fireflink Notify Owner Address Information Copy Shipping address Copy Billing address Billing Address Shipping Address Billing PO Box Shipping PO Box Billing City Shipping City Billing State Shipping State Billing Postal Code Shipping Postal Code Billing Country Shipping Country Description Information Description Save Cancel"':
                                - table:
                                  - rowgroup:
                                    - row "Save Cancel":
                                      - cell "Save Cancel":
                                        - button "Save"
                                        - button "Cancel"
                                    - row "Organization Information":
                                      - cell "Organization Information"
                                    - row "*Organization Name Organization No AUTO GEN ON SAVE":
                                      - cell "*Organization Name"
                                      - cell:
                                        - textbox
                                      - cell "Organization No"
                                      - cell "AUTO GEN ON SAVE":
                                        - textbox: AUTO GEN ON SAVE
                                    - row "Website Phone":
                                      - cell "Website"
                                      - cell:
                                        - textbox
                                      - cell "Phone"
                                      - cell:
                                        - textbox
                                    - row "Ticker Symbol Fax":
                                      - cell "Ticker Symbol"
                                      - cell:
                                        - textbox
                                      - cell "Fax"
                                      - cell:
                                        - textbox
                                    - row "Member Of Select Clear Other Phone":
                                      - cell "Member Of"
                                      - cell "Select Clear":
                                        - textbox
                                        - img "Select"
                                        - button "Clear"
                                      - cell "Other Phone"
                                      - cell:
                                        - textbox
                                    - row "Employees Email":
                                      - cell "Employees"
                                      - cell:
                                        - textbox
                                      - cell "Email"
                                      - cell:
                                        - textbox
                                    - row "Other Email Ownership":
                                      - cell "Other Email"
                                      - cell:
                                        - textbox
                                      - cell "Ownership"
                                      - cell:
                                        - textbox
                                    - row "Industry --None-- Rating --None--":
                                      - cell "Industry"
                                      - cell "--None--":
                                        - combobox:
                                          - option "--None--" [selected]
                                          - option "Apparel"
                                          - option "Banking"
                                          - option "Biotechnology"
                                          - option "Chemicals"
                                          - option "Communications"
                                          - option "Construction"
                                          - option "Consulting"
                                          - option "Education"
                                          - option "Electronics"
                                          - option "Energy"
                                          - option "Engineering"
                                          - option "Entertainment"
                                          - option "Environmental"
                                          - option "Finance"
                                          - option "Food & Beverage"
                                          - option "Government"
                                          - option "Healthcare"
                                          - option "Hospitality"
                                          - option "Insurance"
                                          - option "Machinery"
                                          - option "Manufacturing"
                                          - option "Media"
                                          - option "Not For Profit"
                                          - option "Recreation"
                                          - option "Retail"
                                          - option "Shipping"
                                          - option "Technology"
                                          - option "Telecommunications"
                                          - option "Transportation"
                                          - option "Utilities"
                                          - option "Other"
                                      - cell "Rating"
                                      - cell "--None--":
                                        - combobox:
                                          - option "--None--" [selected]
                                          - option "Acquired"
                                          - option "Active"
                                          - option "Market Failed"
                                          - option "Project Cancelled"
                                          - option "Shutdown"
                                    - row "Type --None-- SIC Code":
                                      - cell "Type"
                                      - cell "--None--":
                                        - combobox:
                                          - option "--None--" [selected]
                                          - option "Analyst"
                                          - option "Competitor"
                                          - option "Customer"
                                          - option "Integrator"
                                          - option "Investor"
                                          - option "Partner"
                                          - option "Press"
                                          - option "Prospect"
                                          - option "Reseller"
                                          - option "Other"
                                      - cell "SIC Code"
                                      - cell:
                                        - textbox
                                    - 'row "Email Opt Out Annual Revenue: ($) 0"':
                                      - cell "Email Opt Out"
                                      - cell:
                                        - checkbox
                                      - 'cell "Annual Revenue: ($)"'
                                      - cell "0":
                                        - textbox: "0"
                                    - row "*Assigned To User Group ACOE Fireflink Notify Owner":
                                      - cell "*Assigned To"
                                      - cell "User Group ACOE Fireflink":
                                        - radio [checked]
                                        - text: User
                                        - radio
                                        - text: Group
                                        - combobox:
                                          - option "ACOE Fireflink" [selected]
                                          - option "A"
                                          - option "Admin123@ Administrator1"
                                          - option "Bill Gates"
                                          - option "Sahu"
                                          - option "Hello World"
                                          - option "Hello World"
                                          - option "Hombale Studios_1904"
                                          - option "John Sales"
                                      - cell "Notify Owner"
                                      - cell:
                                        - checkbox
                                    - row "Address Information Copy Shipping address Copy Billing address":
                                      - cell "Address Information"
                                      - cell "Copy Shipping address":
                                        - radio
                                        - text: Copy Shipping address
                                      - cell "Copy Billing address":
                                        - radio
                                        - text: Copy Billing address
                                    - row "Billing Address Shipping Address":
                                      - cell "Billing Address"
                                      - cell:
                                        - textbox
                                      - cell "Shipping Address"
                                      - cell:
                                        - textbox
                                    - row "Billing PO Box Shipping PO Box":
                                      - cell "Billing PO Box"
                                      - cell:
                                        - textbox
                                      - cell "Shipping PO Box"
                                      - cell:
                                        - textbox
                                    - row "Billing City Shipping City":
                                      - cell "Billing City"
                                      - cell:
                                        - textbox
                                      - cell "Shipping City"
                                      - cell:
                                        - textbox
                                    - row "Billing State Shipping State":
                                      - cell "Billing State"
                                      - cell:
                                        - textbox
                                      - cell "Shipping State"
                                      - cell:
                                        - textbox
                                    - row "Billing Postal Code Shipping Postal Code":
                                      - cell "Billing Postal Code"
                                      - cell:
                                        - textbox
                                      - cell "Shipping Postal Code"
                                      - cell:
                                        - textbox
                                    - row "Billing Country Shipping Country":
                                      - cell "Billing Country"
                                      - cell:
                                        - textbox
                                      - cell "Shipping Country"
                                      - cell:
                                        - textbox
                                    - row "Description Information":
                                      - cell "Description Information"
                                    - row "Description":
                                      - cell "Description"
                                      - cell:
                                        - textbox
                                    - row "Save Cancel":
                                      - cell "Save Cancel":
                                        - button "Save"
                                        - button "Cancel"
      - cell:
        - img
- table:
  - rowgroup:
    - row "Powered by vtiger CRM 5.4.0 © 2004-2026 vtiger.com | Read License | Privacy Policy":
      - cell "Powered by vtiger CRM 5.4.0"
      - cell "© 2004-2026 vtiger.com | Read License | Privacy Policy":
        - text: © 2004-2026
        - link "vtiger.com":
          - /url: http://www.vtiger.com
        - text: "|"
        - link "Read License":
          - /url: javascript:mypopup()
        - text: "|"
        - link "Privacy Policy":
          - /url: http://www.vtiger.com/products/crm/privacy_policy.html
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