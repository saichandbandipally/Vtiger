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
Error: locator.click: Test ended.
Call log:
  - waiting for getByTitle('Create Lead...')

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
> 14 |       await this.createBtn.click()
     |                            ^ Error: locator.click: Test ended.
  15 |     //   await this.titleDD.selectOption(title)
  16 |       await this.firstName.fill(firstName)
  17 |       await this.lastName.fill(lastname)
  18 |       await this.companyName.fill(company)
  19 |       await this.saveBtn.click()
  20 |     }
  21 | }
```