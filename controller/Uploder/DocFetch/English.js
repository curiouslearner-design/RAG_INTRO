import {PDFParse as pdf} from "pdf-parse"
import fs from "fs/promises"
import { EmbedingModel } from "../embeding.js";
import { promises, resolve } from "dns";
import { log } from "console";

const processPdf=async function () {
  

const dataBuffer=await fs.readFile("C:\\Users\\user\\OneDrive\\Documents\\EnglishGrammer.pdf");
const parser=new pdf({data:dataBuffer});
const result=await parser.getText();
await parser.destroy()


// console.log("Number of Pages:",result.pages);
// split the massive text into smaller paragraph chunks

const rawChunks = result.text.split(/\n\s*\n/);
const chunks=rawChunks.map(c=>c.trim()).filter(c=>c.length>80);

console.log(`Total number of valid chunks (${chunks.length})`);



for (let chunk=0;chunk<chunks.length;chunk++){
  console.log(`proccessing chunk ${chunk+1} of ${chunks.length}...`);
  try{
    await EmbedingModel(chunks[chunk],"document")
    await new Promise((resolve)=>setTimeout(resolve,100));
  }
  catch(error){
    console.log(`Failed at chunk ${chunk + 1} ,contiuing`);
    
  }

}
console.log(`All chunks have been stored in susscessfully`);
}
processPdf();
