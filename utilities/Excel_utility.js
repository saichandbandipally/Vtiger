import { Workbook } from "exceljs";
import { asyncWrapProviders } from "node:async_hooks";
import path, { dirname } from "node:path";

export async function  readExcel(sheetname,rownum,cellnum){
  let book = new Workbook()
  await book.xlsx.readFile(path.join(__dirname,"../Test_data/test_script_data.xlsx"))
  let sheet = book.getWorksheet(sheetname)
  let data = sheet.getRow(rownum).getCell(cellnum).toString()
  return data
}