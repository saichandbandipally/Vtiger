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
Error: locator.click: Test ended.
Call log:
  - waiting for getByText('Leads')

```

# Test source

```ts
  1  | 
  2  | export class DashBoardPage {
  3  |     constructor(page){
  4  |         this.page=page
  5  |         this.contactBtn=page.getByRole('link', { name: 'Contacts' })
  6  |         this.leadsBtn= page.getByText("Leads")
  7  |         this.organizationBtn=page.getByText("Organizations")
  8  |         this.productsBtn=page.getByText('Products')
  9  |         this.HoverBtn= page.getByRole('img').nth(2)
  10 |         this.signOutBtn=page.getByRole('link', { name: 'Sign Out' })
  11 |     }
  12 | 
  13 |     async clickContact(){
  14 |         await this.contactBtn.click()
  15 |     }
  16 |     async clickLeads(){
> 17 |         await this.leadsBtn.click()
     |                             ^ Error: locator.click: Test ended.
  18 |     }
  19 |     async clickOrganization(){
  20 |         await this.organizationBtn.click()
  21 |     }
  22 |     async clickProducts(){
  23 |         await this.productsBtn.click()
  24 |     }
  25 |     async logOut(){
  26 |         await this.HoverBtn.hover()
  27 |         await this.signOutBtn.click()
  28 |     }
  29 | 
  30 | 
  31 | }
```