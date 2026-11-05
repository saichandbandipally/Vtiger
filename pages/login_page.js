import data from "../Test_data/common_data.json"

export class LoginPage{
    constructor(page){
        this.page = page
        this.user_name =  page.locator('//input[@type="text"]')
        this.password=  page.locator('//input[@type="password"]')
        this.loginbutton= page.locator('//input[@type="submit"]')

    }

    async login(){
        await this.page.goto(data.url)
        await this.user_name.fill(data.user_name)
        await this.password.fill(data.password)
        await this.loginbutton.click()

    }
}