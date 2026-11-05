# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: leads\create_lead.spec.js >> lead creation 3
- Location: tests\leads\create_lead.spec.js:79:5

# Error details

```
Error: page.goto: net::ERR_INTERNET_DISCONNECTED at http://49.249.29.4:8888/
Call log:
  - navigating to "http://49.249.29.4:8888/", waiting until "load"

```

# Test source

```ts
  1  | import data from "../Test_data/common_data.json"
  2  | 
  3  | export class LoginPage{
  4  |     constructor(page){
  5  |         this.page = page
  6  |         this.user_name =  page.locator('//input[@type="text"]')
  7  |         this.password=  page.locator('//input[@type="password"]')
  8  |         this.loginbutton= page.locator('//input[@type="submit"]')
  9  | 
  10 |     }
  11 | 
  12 |     async login(){
> 13 |         await this.page.goto(data.url)
     |                         ^ Error: page.goto: net::ERR_INTERNET_DISCONNECTED at http://49.249.29.4:8888/
  14 |         await this.user_name.fill(data.user_name)
  15 |         await this.password.fill(data.password)
  16 |         await this.loginbutton.click()
  17 | 
  18 |     }
  19 | }
```