// import { expect, test } from "@playwright/test";
// import path from "node:path";

// //  Login to vtiger application
// // -> Click on products link
// // -> Click on create product lookup image
// // -> Enter product name
// // -> check whether Product active is checked or not
// // -> Choose GL-Account : 306- Internet sales
// // -> Check whether in Stock Information Handler is Checked with User or not.
// // -> Add Product Image in Product Image Information.
// // -> Validate whether file was uploaded or not
// // ->click on save Btn
// // -> Verify whether the product is created in product Information page and Logout from the application.

// test("create product",async({page})=>{
//      await page.goto('http://49.249.29.4:8888')
//     let username="admin"
//     let password="admin"
//     await page.locator('//input[@type="text"]').fill(username)
//     await page.locator('//input[@type="password"]').fill(password)
//     await page.locator('//input[@type="submit"]').click()
//     await page.getByText('Products').click()
//     await page.getByTitle("Create Product...").click()
//     let product_name = "CAT"
//     await page.locator('//input[@name="productname"]').fill(product_name)
//     await expect( page.locator('//input[@name="discontinued"]')).toBeChecked()
//     await page.locator('//select[@name="glacct"]').selectOption({value:"306-Internet Sales"})
//     await expect(page.locator('//input[@type="radio" and  @value="U"]')).toBeChecked()
//     await page.locator('//input[@id="my_file_element"]').setInputFiles(path.join(__dirname,"../../uploads/tiger.jpg"))
//     await page.locator('(//input[@accesskey="S"])[1]').click()
//     await expect(page.locator('//span[@id="dtlview_Product Name"]')).toHaveText(product_name)
    



// })



import { expect, test } from "@playwright/test";
import data from "../../Test_data/common_data.json"
import path from "node:path";

//  Login to vtiger application
// -> Click on products link
// -> Click on create product lookup image
// -> Enter product name
// -> check whether Product active is checked or not
// -> Choose GL-Account : 306- Internet sales
// -> Check whether in Stock Information Handler is Checked with User or not.
// -> Add Product Image in Product Image Information.
// -> Validate whether file was uploaded or not
// ->click on save Btn
// -> Verify whether the product is created in product Information page and Logout from the application.

test("create product",async({page})=>{
     await page.goto(data.url)
    let username=data.user_name
    let password=data.password
    await page.locator('//input[@type="text"]').fill(username)
    await page.locator('//input[@type="password"]').fill(password)
    await page.locator('//input[@type="submit"]').click()
    await page.getByText('Products').click()
    await page.getByTitle("Create Product...").click()
    let product_name = "CAT"
    await page.locator('//input[@name="productname"]').fill(product_name)
    await expect( page.locator('//input[@name="discontinued"]')).toBeChecked()
    await page.locator('//select[@name="glacct"]').selectOption({value:"306-Internet Sales"})
    await expect(page.locator('//input[@type="radio" and  @value="U"]')).toBeChecked()
    await page.locator('//input[@id="my_file_element"]').setInputFiles(path.join(__dirname,"../../uploads/tiger.jpg"))
    await page.locator('(//input[@accesskey="S"])[1]').click()
    await expect(page.locator('//span[@id="dtlview_Product Name"]')).toHaveText(product_name)
    



})
