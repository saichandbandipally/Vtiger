# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: leads\create_lead.spec.js >> lead creation 6
- Location: tests\leads\create_lead.spec.js:79:5

# Error details

```
TypeError: Cannot read properties of undefined (reading 'getRow')
```

```
Error: locator.fill: value: expected string, got object
```

# Page snapshot

```yaml
- generic [active] [ref=f3e1]:
  - table [ref=f3e2]:
    - rowgroup [ref=f3e3]:
      - row [ref=f3e4]:
        - cell [ref=f3e5]:
          - img "vtiger-crm-logo.gif" [ref=f3e6]
        - cell [ref=f3e7]:
          - table [ref=f3e9]:
            - rowgroup [ref=f3e10]:
              - row [ref=f3e11]:
                - cell [ref=f3e12]:
                  - textbox [ref=f3e13]: Search...
                - cell [ref=f3e14]:
                  - link:
                    - /url: javascript:void(0);
                    - img [ref=f3e15] [cursor=pointer]
                - cell [ref=f3e16]:
                  - button "Find" [ref=f3e17] [cursor=pointer]
        - cell [ref=f3e18]:
          - table [ref=f3e19]:
            - rowgroup [ref=f3e20]:
              - row [ref=f3e21]:
                - cell "ACOE Fireflink" [ref=f3e22]
                - cell [ref=f3e23]
                - cell [ref=f3e25]
                - cell [ref=f3e28]
  - table [ref=f3e30]:
    - rowgroup [ref=f3e31]:
      - row [ref=f3e32]:
        - cell [ref=f3e33]:
          - link [ref=f3e34] [cursor=pointer]:
            - /url: index.php?module=Home&action=index&parenttab=My Home Page
        - cell [ref=f3e36]:
          - table [ref=f3e37]:
            - rowgroup [ref=f3e38]:
              - row [ref=f3e39]:
                - cell [ref=f3e40]
                - cell [ref=f3e42]:
                  - link "Calendar" [ref=f3e43] [cursor=pointer]:
                    - /url: index.php?module=Calendar&action=index
                - cell [ref=f3e44]
                - cell [ref=f3e46]:
                  - link "Organizations" [ref=f3e47] [cursor=pointer]:
                    - /url: index.php?module=Accounts&action=index
                - cell [ref=f3e48]
                - cell [ref=f3e50]:
                  - link "Contacts" [ref=f3e51] [cursor=pointer]:
                    - /url: index.php?module=Contacts&action=index
                - cell [ref=f3e52]
                - cell [ref=f3e54]:
                  - link "Opportunities" [ref=f3e55] [cursor=pointer]:
                    - /url: index.php?module=Potentials&action=index
                - cell [ref=f3e56]
                - cell [ref=f3e58]:
                  - link "Products" [ref=f3e59] [cursor=pointer]:
                    - /url: index.php?module=Products&action=index
                - cell [ref=f3e60]
                - cell [ref=f3e62]:
                  - link "Documents" [ref=f3e63] [cursor=pointer]:
                    - /url: index.php?module=Documents&action=index
                - cell [ref=f3e64]
                - cell [ref=f3e66]:
                  - link "Email" [ref=f3e67] [cursor=pointer]:
                    - /url: index.php?module=Emails&action=index
                - cell [ref=f3e68]
                - cell [ref=f3e70]:
                  - link "Trouble Tickets" [ref=f3e71] [cursor=pointer]:
                    - /url: index.php?module=HelpDesk&action=index
                - cell [ref=f3e72]
                - cell [ref=f3e74]:
                  - link "Dashboard" [ref=f3e75] [cursor=pointer]:
                    - /url: index.php?module=Dashboard&action=index
                - cell [ref=f3e76]
                - cell [ref=f3e78]:
                  - link "Leads" [ref=f3e79] [cursor=pointer]:
                    - /url: index.php?module=Leads&action=index
                - cell [ref=f3e80]
                - cell [ref=f3e82]:
                  - link "More" [ref=f3e83] [cursor=pointer]:
                    - /url: javascript:;
                - cell [ref=f3e85]
                - cell "Quick Create..." [ref=f3e87]:
                  - combobox [ref=f3e88]:
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
        - cell [ref=f3e89]
  - table [ref=f3e90]:
    - rowgroup [ref=f3e91]:
      - row [ref=f3e92]:
        - cell [ref=f3e93]
      - row [ref=f3e94]:
        - cell [ref=f3e95]:
          - link "Leads" [ref=f3e96] [cursor=pointer]:
            - /url: index.php?action=ListView&module=Leads&parenttab=Marketing
        - cell [ref=f3e97]:
          - table [ref=f3e98]:
            - rowgroup [ref=f3e99]:
              - row [ref=f3e100]:
                - cell [ref=f3e101]
                - cell [ref=f3e102]:
                  - table [ref=f3e103]:
                    - rowgroup [ref=f3e104]:
                      - row [ref=f3e105]:
                        - cell [ref=f3e106]:
                          - table [ref=f3e107]:
                            - rowgroup [ref=f3e108]:
                              - row [ref=f3e109]:
                                - cell [ref=f3e110]:
                                  - link [ref=f3e111] [cursor=pointer]:
                                    - /url: index.php?module=Leads&action=EditView&return_action=DetailView&parenttab=Marketing
                                    - img "Create Lead..." [ref=f3e112]
                                - cell [ref=f3e113]
                - cell [ref=f3e115]
                - cell [ref=f3e116]:
                  - table [ref=f3e117]:
                    - rowgroup [ref=f3e118]:
                      - row [ref=f3e119]:
                        - cell [ref=f3e120]:
                          - link [ref=f3e121] [cursor=pointer]:
                            - /url: javascript:;
                            - img "Open Calendar..." [ref=f3e122]
                        - cell [ref=f3e123]:
                          - link [ref=f3e124] [cursor=pointer]:
                            - /url: javascript:;
                            - img "Show World Clock..." [ref=f3e125]
                        - cell [ref=f3e126]:
                          - link [ref=f3e127] [cursor=pointer]:
                            - /url: "#"
                            - img "Open Calculator..." [ref=f3e128]
                        - cell [ref=f3e129]:
                          - link [ref=f3e130] [cursor=pointer]:
                            - /url: javascript:;
                            - img "Chat..." [ref=f3e131]
                        - cell [ref=f3e132]:
                          - img "Last Viewed" [ref=f3e133]
                - cell [ref=f3e134]
                - cell [ref=f3e135]:
                  - table [ref=f3e136]:
                    - rowgroup [ref=f3e137]:
                      - row [ref=f3e138]:
                        - cell [ref=f3e139]:
                          - link [ref=f3e140] [cursor=pointer]:
                            - /url: index.php?module=Leads&action=Import&step=1&return_module=Leads&return_action=index&parenttab=Marketing
                            - img "Import Leads" [ref=f3e141]
                        - cell [ref=f3e142]:
                          - link [ref=f3e143] [cursor=pointer]:
                            - /url: javascript:void(0)
                            - img "Export Leads" [ref=f3e144]
                        - cell [ref=f3e145]
                - cell [ref=f3e147]
                - cell [ref=f3e148]:
                  - table [ref=f3e149]:
                    - rowgroup [ref=f3e150]:
                      - row [ref=f3e151]:
                        - cell [ref=f3e152]:
                          - link [ref=f3e153] [cursor=pointer]:
                            - /url: index.php?module=Settings&action=ModuleManager&module_settings=true&formodule=Leads&parenttab=Settings
                            - img "Leads Settings" [ref=f3e154]
  - table [ref=f3e155]:
    - rowgroup [ref=f3e156]:
      - row [ref=f3e157]:
        - cell [ref=f3e158]
        - cell [ref=f3e160]:
          - generic [ref=f3e161]:
            - text: Creating New Lead
            - separator [ref=f3e162]
            - table [ref=f3e164]:
              - rowgroup [ref=f3e165]:
                - row [ref=f3e166]:
                  - cell [ref=f3e167]:
                    - table [ref=f3e168]:
                      - rowgroup [ref=f3e169]:
                        - row [ref=f3e170]:
                          - cell [ref=f3e171]
                          - cell "Lead Information" [ref=f3e172]
                          - cell [ref=f3e173]
                          - cell [ref=f3e174]
                - row [ref=f3e175]:
                  - cell [ref=f3e176]:
                    - table [ref=f3e177]:
                      - rowgroup [ref=f3e178]:
                        - row [ref=f3e179]:
                          - cell [ref=f3e180]:
                            - table [ref=f3e181]:
                              - rowgroup [ref=f3e182]:
                                - row:
                                  - cell
                                - row [ref=f3e183]:
                                  - cell [ref=f3e184]:
                                    - table [ref=f3e185]:
                                      - rowgroup [ref=f3e186]:
                                        - row [ref=f3e187]:
                                          - cell [ref=f3e188]:
                                            - generic [ref=f3e189]:
                                              - button "Save" [ref=f3e190]
                                              - button "Cancel" [ref=f3e191]
                                        - row [ref=f3e192]:
                                          - cell "Lead Information" [ref=f3e193]
                                        - row [ref=f3e194]:
                                          - cell "First Name" [ref=f3e195]
                                          - cell "--None--" [ref=f3e196]:
                                            - combobox [ref=f3e197]:
                                              - option "--None--" [selected]
                                              - option "Mr."
                                              - option "Ms."
                                              - option "Mrs."
                                              - option "Dr."
                                              - option "Prof."
                                            - textbox [ref=f3e198]
                                          - cell "Lead No" [ref=f3e199]
                                          - cell [ref=f3e200]:
                                            - textbox [ref=f3e201]: AUTO GEN ON SAVE
                                        - row [ref=f3e202]:
                                          - cell "*Last Name" [ref=f3e203]
                                          - cell [ref=f3e204]:
                                            - textbox [ref=f3e205]
                                          - cell "Phone" [ref=f3e206]
                                          - cell [ref=f3e207]:
                                            - textbox [ref=f3e208]
                                        - row [ref=f3e209]:
                                          - cell "*Company" [ref=f3e210]
                                          - cell [ref=f3e211]:
                                            - textbox [ref=f3e212]
                                          - cell "Mobile" [ref=f3e213]
                                          - cell [ref=f3e214]:
                                            - textbox [ref=f3e215]
                                        - row [ref=f3e216]:
                                          - cell "Title" [ref=f3e217]
                                          - cell [ref=f3e218]:
                                            - textbox [ref=f3e219]
                                          - cell "Fax" [ref=f3e220]
                                          - cell [ref=f3e221]:
                                            - textbox [ref=f3e222]
                                        - row [ref=f3e223]:
                                          - cell "Lead Source" [ref=f3e224]
                                          - cell "--None--" [ref=f3e225]:
                                            - combobox [ref=f3e226]:
                                              - option "--None--" [selected]
                                              - option "Cold Call"
                                              - option "Existing Customer"
                                              - option "Self Generated"
                                              - option "Employee"
                                              - option "Partner"
                                              - option "Public Relations"
                                              - option "Direct Mail"
                                              - option "Conference"
                                              - option "Trade Show"
                                              - option "Web Site"
                                              - option "Word of mouth"
                                              - option "Other"
                                          - cell "Email" [ref=f3e227]
                                          - cell [ref=f3e228]:
                                            - textbox [ref=f3e229]
                                        - row [ref=f3e230]:
                                          - cell "Industry" [ref=f3e231]
                                          - cell "--None--" [ref=f3e232]:
                                            - combobox [ref=f3e233]:
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
                                          - cell "Website" [ref=f3e234]
                                          - cell [ref=f3e235]:
                                            - textbox [ref=f3e236]
                                        - row [ref=f3e237]:
                                          - 'cell "Annual Revenue: ($)" [ref=f3e238]'
                                          - cell [ref=f3e239]:
                                            - textbox [ref=f3e240]: "0"
                                          - cell "Lead Status" [ref=f3e241]
                                          - cell "--None--" [ref=f3e242]:
                                            - combobox [ref=f3e243]:
                                              - option "--None--" [selected]
                                              - option "Attempted to Contact"
                                              - option "Cold"
                                              - option "Contact in Future"
                                              - option "Contacted"
                                              - option "Hot"
                                              - option "Junk Lead"
                                              - option "Lost Lead"
                                              - option "Not Contacted"
                                              - option "Pre Qualified"
                                              - option "Qualified"
                                              - option "Warm"
                                        - row [ref=f3e244]:
                                          - cell "No Of Employees" [ref=f3e245]
                                          - cell [ref=f3e246]:
                                            - textbox [ref=f3e247]
                                          - cell "Rating" [ref=f3e248]
                                          - cell "--None--" [ref=f3e249]:
                                            - combobox [ref=f3e250]:
                                              - option "--None--" [selected]
                                              - option "Acquired"
                                              - option "Active"
                                              - option "Market Failed"
                                              - option "Project Cancelled"
                                              - option "Shutdown"
                                        - row [ref=f3e251]:
                                          - cell "Secondary Email" [ref=f3e252]
                                          - cell [ref=f3e253]:
                                            - textbox [ref=f3e254]
                                          - cell "*Assigned To" [ref=f3e255]
                                          - cell [ref=f3e256]:
                                            - radio [checked] [ref=f3e257]
                                            - text: User
                                            - radio [ref=f3e258]
                                            - text: Group
                                            - combobox [ref=f3e260]:
                                              - option "ACOE Fireflink" [selected]
                                              - option "A"
                                              - option "Admin123@ Administrator1"
                                              - option "Bill Gates"
                                              - option "Sahu"
                                              - option "Hello World"
                                              - option "Hello World"
                                              - option "Hombale Studios_1904"
                                              - option "John Sales"
                                        - row [ref=f3e261]:
                                          - cell "Address Information" [ref=f3e262]
                                        - row [ref=f3e263]:
                                          - cell "PO Box" [ref=f3e264]
                                          - cell [ref=f3e265]:
                                            - textbox [ref=f3e266]
                                          - cell "Postal Code" [ref=f3e267]
                                          - cell [ref=f3e268]:
                                            - textbox [ref=f3e269]
                                        - row [ref=f3e270]:
                                          - cell "City" [ref=f3e271]
                                          - cell [ref=f3e272]:
                                            - textbox [ref=f3e273]
                                          - cell "Country" [ref=f3e274]
                                          - cell [ref=f3e275]:
                                            - textbox [ref=f3e276]
                                        - row [ref=f3e277]:
                                          - cell "State" [ref=f3e278]
                                          - cell [ref=f3e279]:
                                            - textbox [ref=f3e280]
                                          - cell "Street" [ref=f3e281]
                                          - cell [ref=f3e282]:
                                            - textbox [ref=f3e283]
                                        - row [ref=f3e284]:
                                          - cell "Description" [ref=f3e285]
                                          - cell [ref=f3e286]:
                                            - textbox [ref=f3e287]
                                        - row [ref=f3e288]:
                                          - cell [ref=f3e289]:
                                            - generic [ref=f3e290]:
                                              - button "Save" [ref=f3e291]
                                              - button "Cancel" [ref=f3e292]
        - cell [ref=f3e293]
  - table [ref=f3e295]:
    - rowgroup [ref=f3e296]:
      - row [ref=f3e297]:
        - cell "Powered by vtiger CRM 5.4.0" [ref=f3e298]
        - cell [ref=f3e300]:
          - generic [ref=f3e301]:
            - text: © 2004-2026
            - link "vtiger.com" [ref=f3e302] [cursor=pointer]:
              - /url: http://www.vtiger.com
            - text: "|"
            - link "Read License" [ref=f3e303] [cursor=pointer]:
              - /url: javascript:mypopup()
            - text: "|"
            - link "Privacy Policy" [ref=f3e304] [cursor=pointer]:
              - /url: http://www.vtiger.com/products/crm/privacy_policy.html
```

# Test source

```ts
  1  | 
  2  | export class Leads{
  3  |     constructor(page){
  4  |         this.page=page
  5  |         this.createBtn=page.getByTitle("Create Lead...")
  6  |         this.titleDD= page.locator('//select[@name="salutationtype"]')
  7  |         this.firstName=page.locator('//input[@name="firstname"]')
  8  |         this.lastName= page.locator('//input[@name="lastname"]')
  9  |         this.companyName=page.locator('//input[@name="company"]')
  10 |         this.saveBtn=page.getByRole("button",{name:"  Save  "}).first()
  11 |     }
  12 | 
  13 |     async createLead(title,firstName,lastname,company){
  14 |       await this.createBtn.click()
  15 |       await this.titleDD.selectOption(title)
> 16 |       await this.firstName.fill(firstName)
     |                            ^ Error: locator.fill: value: expected string, got object
  17 |       await this.lastName.fill(lastname)
  18 |       await this.companyName.fill(company)
  19 |       await this.saveBtn.click()
  20 |     }
  21 | }
```