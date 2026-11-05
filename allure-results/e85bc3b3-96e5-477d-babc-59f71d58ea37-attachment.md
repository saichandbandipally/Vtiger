# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: leads\create_lead.spec.js >> lead creation 2
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
- generic [active] [ref=f1e1]:
  - table [ref=f1e2]:
    - rowgroup [ref=f1e3]:
      - row [ref=f1e4]:
        - cell [ref=f1e5]:
          - img "vtiger-crm-logo.gif" [ref=f1e6]
        - cell [ref=f1e7]:
          - table [ref=f1e9]:
            - rowgroup [ref=f1e10]:
              - row [ref=f1e11]:
                - cell [ref=f1e12]:
                  - textbox [ref=f1e13]: Search...
                - cell [ref=f1e14]:
                  - link:
                    - /url: javascript:void(0);
                    - img [ref=f1e15] [cursor=pointer]
                - cell [ref=f1e16]:
                  - button "Find" [ref=f1e17] [cursor=pointer]
        - cell [ref=f1e18]:
          - table [ref=f1e19]:
            - rowgroup [ref=f1e20]:
              - row [ref=f1e21]:
                - cell "ACOE Fireflink" [ref=f1e22]
                - cell [ref=f1e23]
                - cell [ref=f1e25]
                - cell [ref=f1e28]
  - table [ref=f1e30]:
    - rowgroup [ref=f1e31]:
      - row [ref=f1e32]:
        - cell [ref=f1e33]:
          - link [ref=f1e34] [cursor=pointer]:
            - /url: index.php?module=Home&action=index
        - cell [ref=f1e36]:
          - table [ref=f1e37]:
            - rowgroup [ref=f1e38]:
              - row [ref=f1e39]:
                - cell [ref=f1e40]
                - cell [ref=f1e42]:
                  - link "Calendar" [ref=f1e43] [cursor=pointer]:
                    - /url: index.php?module=Calendar&action=index
                - cell [ref=f1e44]
                - cell [ref=f1e45]:
                  - link "Organizations" [ref=f1e46] [cursor=pointer]:
                    - /url: index.php?module=Accounts&action=index
                - cell [ref=f1e47]
                - cell [ref=f1e48]:
                  - link "Contacts" [ref=f1e49] [cursor=pointer]:
                    - /url: index.php?module=Contacts&action=index
                - cell [ref=f1e50]
                - cell [ref=f1e51]:
                  - link "Opportunities" [ref=f1e52] [cursor=pointer]:
                    - /url: index.php?module=Potentials&action=index
                - cell [ref=f1e53]
                - cell [ref=f1e54]:
                  - link "Products" [ref=f1e55] [cursor=pointer]:
                    - /url: index.php?module=Products&action=index
                - cell [ref=f1e56]
                - cell [ref=f1e57]:
                  - link "Documents" [ref=f1e58] [cursor=pointer]:
                    - /url: index.php?module=Documents&action=index
                - cell [ref=f1e59]
                - cell [ref=f1e60]:
                  - link "Email" [ref=f1e61] [cursor=pointer]:
                    - /url: index.php?module=Emails&action=index
                - cell [ref=f1e62]
                - cell [ref=f1e63]:
                  - link "Trouble Tickets" [ref=f1e64] [cursor=pointer]:
                    - /url: index.php?module=HelpDesk&action=index
                - cell [ref=f1e65]
                - cell [ref=f1e66]:
                  - link "Dashboard" [ref=f1e67] [cursor=pointer]:
                    - /url: index.php?module=Dashboard&action=index
                - cell [ref=f1e68]
                - cell [ref=f1e69]:
                  - link "Leads" [ref=f1e70] [cursor=pointer]:
                    - /url: index.php?module=Leads&action=index
                - cell [ref=f1e71]
                - cell [ref=f1e72]:
                  - link "More" [ref=f1e73] [cursor=pointer]:
                    - /url: javascript:;
                - cell [ref=f1e74]
                - cell "Quick Create..." [ref=f1e75]:
                  - combobox [ref=f1e76]:
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
        - cell [ref=f1e77]
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