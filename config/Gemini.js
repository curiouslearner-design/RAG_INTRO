import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import path from "path"
import { fileURLToPath } from "url";

const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename);

dotenv.config({path:path.join(__dirname,"../.env")})

export const ai=new GoogleGenAI({
  apiKey:process.env.GOOGLE_API  
})
console.log("server is connected to the Pine Cone API");



