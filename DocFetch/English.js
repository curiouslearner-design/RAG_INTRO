import pdf from "pdf-parse"
import fs from "fs/promises"

const dataBuffer=fs.readFile("C:\\Users\\user\\OneDrive\\Documents\\EnglishGrammer.pdf");
const data=await pdf(dataBuffer);

fs.writeFile("../Document/EnglishGrammer.pdf");

// pdf(dataBuffer).then(function(data)
// {
//   console.log("Number of Pages:",data.numpages);
//   console.log("Text sample:\n",data.text.substring(0,500));
// })