import {PDFParse as pdf} from "pdf-parse"
import fs from "fs/promises"
import { EmbedingModel } from "../controller/Uploder/embeding.js";

const processPdf=async function () {
  

const dataBuffer=await fs.readFile("C:\\Users\\user\\OneDrive\\Documents\\GIT.pdf");
const parser=new pdf({data:dataBuffer});
const result=await parser.getText();
await parser.destroy()


console.log("Number of Pages:",result.pages);
// split the massive text into smaller paragraph chunks

const rawChunks = result.text.split(/\n\s*\n/);
const chunks=rawChunks.map(c=>c.trim()).filter(c=>c.length>80);

console.log(`Total number of valid chunks (${chunks.length})`);



for (let i of chunks){
  await EmbedingModel(i,"document")
}
console.log(`All chunks have been stored in susscessfully`);
}
processPdf();
