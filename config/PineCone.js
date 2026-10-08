import {Pinecone} from "@pinecone-database/pinecone"
import dotenv from "dotenv";
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

export {PC,pineconeIndex};