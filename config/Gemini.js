import { GoogleGenAI } from "@google/genai";
import { configDotenv } from "dotenv";
configDotenv()

export const ai=new GoogleGenAI({
  apiKey:process.env.GOOGLE_API
})

