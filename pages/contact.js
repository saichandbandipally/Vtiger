
export class Contact{
    constructor(page){
        this.page=page
        this.createBtn= page.getByTitle("Create Contact...")
        this.titleDD= page.locator('//select[@name="salutationtype"]')
        this.firstName=page.locator('//input[@name="firstname"]')
        this.lastName= page.locator('//input[@name="lastname"]')
        this.leadSourceDD=page.locator('//select[@name="leadsource"]')
        this.supportEndDate= page.locator('//img[@id="jscal_trigger_support_end_date"]')
        this.monthYear=page.locator('//td[@class="title"]')
        this.nextbtn=page.getByRole('cell', { name: '›' })
        this.saveBtn=page.locator('(//input[@title="Save [Alt+S]"])[1]')
  
        
        
    }

    async createContact(title,firstname,lastname,leadsource){
        await this.createBtn.click()
        await this.titleDD.selectOption(title)
        await this.firstName.fill(firstname)
        await this.lastName.fill(lastname)
        await this.leadSourceDD.selectOption(leadsource)
        

    }

    async selectDate(date,Day){
        await this.supportEndDate.click()
        let month
        while (true) {
                month = await this.monthYear.textContent()
                if (month==date) {
                   await this.page.locator(`//td[text()="${Day}" and (@class="day" or @class="day weekend") ] `).click()
                   break    
                }
                 else{
                   await this.nextbtn.click()
                 }

        
        
       }
        
    }

    async save(){
       await this.saveBtn.click()
    }

  
}

    


 
    