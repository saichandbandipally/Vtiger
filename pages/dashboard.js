
export class DashBoardPage {
    constructor(page){
        this.page=page
        this.contactBtn=page.getByRole('link', { name: 'Contacts' })
        this.leadsBtn= page.locator('//a[text()="Leads"]')
        this.organizationBtn=page.getByText("Organizations")
        this.productsBtn=page.getByText('Products')
        this.HoverBtn= page.getByRole('img').nth(2)
        this.signOutBtn=page.getByRole('link', { name: 'Sign Out' })
    }

    async clickContact(){
        await this.contactBtn.click()
    }
    async clickLeads(){
        await this.leadsBtn.click()
    }
    async clickOrganization(){
        await this.organizationBtn.click()
    }
    async clickProducts(){
        await this.productsBtn.click()
    }
    async logOut(){
        await this.HoverBtn.hover()
        await this.signOutBtn.click()
    }


}