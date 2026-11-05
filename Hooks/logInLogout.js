import { test,expect } from "@playwright/test";
import { LoginPage } from "../pages/login_page";
import { DashBoardPage } from "../pages/dashboard";

test.beforeEach("login",async({page})=>{
    let ln = new LoginPage(page)
    await  ln.login()

})

test.afterEach("logout",async({page})=>{
    let db= new DashBoardPage(page)
    await  db.logOut()
})

export{
    test,expect
}