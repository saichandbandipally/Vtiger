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
  - waiting for locator('//a[text()="Leads"]')
    - locator resolved to <a href="index.php?module=Leads&action=index">Leads</a>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling

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
                - cell [ref=f1e46]:
                  - link "Organizations" [ref=f1e47] [cursor=pointer]:
                    - /url: index.php?module=Accounts&action=index
                - cell [ref=f1e48]
                - cell [ref=f1e50]:
                  - link "Contacts" [ref=f1e51] [cursor=pointer]:
                    - /url: index.php?module=Contacts&action=index
                - cell [ref=f1e52]
                - cell [ref=f1e54]:
                  - link "Opportunities" [ref=f1e55] [cursor=pointer]:
                    - /url: index.php?module=Potentials&action=index
                - cell [ref=f1e56]
                - cell [ref=f1e58]:
                  - link "Products" [ref=f1e59] [cursor=pointer]:
                    - /url: index.php?module=Products&action=index
                - cell [ref=f1e60]
                - cell [ref=f1e62]:
                  - link "Documents" [ref=f1e63] [cursor=pointer]:
                    - /url: index.php?module=Documents&action=index
                - cell [ref=f1e64]
                - cell [ref=f1e66]:
                  - link "Email" [ref=f1e67] [cursor=pointer]:
                    - /url: index.php?module=Emails&action=index
                - cell [ref=f1e68]
                - cell [ref=f1e70]:
                  - link "Trouble Tickets" [ref=f1e71] [cursor=pointer]:
                    - /url: index.php?module=HelpDesk&action=index
                - cell [ref=f1e72]
                - cell [ref=f1e74]:
                  - link "Dashboard" [ref=f1e75] [cursor=pointer]:
                    - /url: index.php?module=Dashboard&action=index
                - cell [ref=f1e76]
                - cell [ref=f1e78]:
                  - link "Leads" [ref=f1e79] [cursor=pointer]:
                    - /url: index.php?module=Leads&action=index
                - cell [ref=f1e80]
                - cell [ref=f1e82]:
                  - link "More" [ref=f1e83] [cursor=pointer]:
                    - /url: javascript:;
                - cell [ref=f1e85]
                - cell "Quick Create..." [ref=f1e87]:
                  - combobox [ref=f1e88]:
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
        - cell [ref=f1e89]
  - table [ref=f1e91]:
    - rowgroup [ref=f1e92]:
      - row [ref=f1e93] [cursor=pointer]:
        - cell [ref=f1e94]:
          - link "Home" [ref=f1e95]:
            - /url: index.php?action=index&module=Home
        - cell [ref=f1e96]
        - cell [ref=f1e97]
        - cell [ref=f1e99]:
          - img "Open Calendar..." [ref=f1e100]
        - cell [ref=f1e101]:
          - img "Show World Clock..." [ref=f1e102]
        - cell [ref=f1e103]:
          - img "Open Calculator..." [ref=f1e104]
        - cell [ref=f1e105]:
          - img "Chat..." [ref=f1e106]
        - cell [ref=f1e107]:
          - img "Last Viewed" [ref=f1e108]
        - cell [ref=f1e109]:
          - img "Change layout" [ref=f1e110]
        - cell [ref=f1e111]
  - table [ref=f1e112]:
    - rowgroup [ref=f1e113]:
      - row [ref=f1e114]:
        - cell [ref=f1e115]
  - table [ref=f1e116]:
    - rowgroup [ref=f1e117]:
      - row [ref=f1e118]:
        - cell "Powered by vtiger CRM 5.4.0" [ref=f1e119]
        - cell [ref=f1e121]:
          - generic [ref=f1e122]:
            - text: © 2004-2026
            - link "vtiger.com" [ref=f1e123] [cursor=pointer]:
              - /url: http://www.vtiger.com
            - text: "|"
            - link "Read License" [ref=f1e124] [cursor=pointer]:
              - /url: javascript:mypopup()
            - text: "|"
            - link "Privacy Policy" [ref=f1e125] [cursor=pointer]:
              - /url: http://www.vtiger.com/products/crm/privacy_policy.html
```

# Test source

```ts
  1  | 
  2  | export class DashBoardPage {
  3  |     constructor(page){
  4  |         this.page=page
  5  |         this.contactBtn=page.getByRole('link', { name: 'Contacts' })
  6  |         this.leadsBtn= page.locator('//a[text()="Leads"]')
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