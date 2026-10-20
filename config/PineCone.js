import {Pinecone} from "@pinecone-database/pinecone"
import dotenv from "dotenv";
<<<<<<< HEAD
import path from 'path'
import { fileURLToPath } from "url";
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);

dotenv.config({path:path.join(__dirname,"../.env")});


const PC=new Pinecone({
  apiKey:process.env.PINECONE_KEY,
})

const pineconeIndex=PC.index("git");
=======
import path from "path";
import { fileURLToPath } from "url";
const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename);

dotenv.config({path:path.join(__dirname,'../.env')})
const PC=new Pinecone({
  apiKey:process.env.PINECONE_KEY,
})
console.log("server is connected to the Gemini API");
const pineconeIndex=PC.index("english");
>>>>>>> 6f3e859462d383f37c9d05f76e178b9f1876affb

export {PC,pineconeIndex};