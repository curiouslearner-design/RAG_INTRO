import {PDFParse as pdf} from "pdf-parse"
import fs from "fs/promises"
const processPdf=async function () {
  

const dataBuffer=await fs.readFile("C:\\Users\\user\\OneDrive\\Documents\\EnglishGrammer.pdf");
const parser=new pdf({data:dataBuffer});
const result=await parser.getText();


 console.log("Number of Pages:",result.pages);
  console.log("Text sample:\n",result.text.substring(0,500));


await fs.writeFile("../Document/EnglishGrammer.pdf",dataBuffer);
console.log(`file has been writen `);

await parser.destroy()

}
processPdf();
