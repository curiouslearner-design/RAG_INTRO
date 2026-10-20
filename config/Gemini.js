import { GoogleGenAI } from "@google/genai";
<<<<<<< HEAD
import { configDotenv } from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename)

configDotenv({path:path.join(__dirname,"../.env")});

=======
import dotenv from "dotenv";
import path from "path"
import { fileURLToPath } from "url";

const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename);

dotenv.config({path:path.join(__dirname,"../.env")})
>>>>>>> 6f3e859462d383f37c9d05f76e178b9f1876affb

export const ai=new GoogleGenAI({
  apiKey:process.env.GOOGLE_API  
})
console.log("server is connected to the Pine Cone API");



