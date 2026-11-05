
export class Leads{
    constructor(page){
        this.page=page
        this.createBtn=page.getByTitle("Create Lead...")
        this.titleDD= page.locator('//select[@name="salutationtype"]')
        this.firstName=page.locator('//input[@name="firstname"]')
        this.lastName= page.locator('//input[@name="lastname"]')
        this.companyName=page.locator('//input[@name="company"]')
        this.saveBtn=page.getByRole("button",{name:"  Save  "}).first()
    }

    async createLead(title,firstName,lastname,company){
      await this.createBtn.click()
      await this.titleDD.selectOption(title)
      await this.firstName.fill(firstName)
      await this.lastName.fill(lastname)
      await this.companyName.fill(company)
      await this.saveBtn.click()
    }
}