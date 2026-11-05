
export class Organization{
    constructor(page){
        this.page=page
        this.Createbtn=page.getByTitle("Create Organization...")
        this.OrganizationName= page.locator('//input[@name="accountname"]')
        this.saveBtn=page.getByRole("button",{name:"  Save  "}).first()
    }

    async createOrganization(Organization){
        this.Createbtn.click()
        this.OrganizationName.fill(Organization)
        this.saveBtn.click()
    }
}

    