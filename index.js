import express from "express"
import cors from "cors"
<<<<<<< HEAD
import route from "./routes/DailyDose.js"
import dotenv from "dotenv"

dotenv.config()

const PORT = process.env.PORT || 9000;
const PAGE=process.env.PAGE;
const app=express();
app.use(cors({
  origin:PAGE.trim(),
  credentials:true,
  methods:['GET','POST']
}))

app.use(express.json())

app.use("/DailyDose",route);
app.listen(PORT,()=>{
  console.log(`the server is running on the port ${PORT}.`);
  
=======
import route from "./routes/DailyDose";
import { configDotenv } from "dotenv";
configDotenv();
const PORT=process.env.PORT || 8000;
const app=express()

app.use(cors);
app.use("/getDailyDose",route);

app.listen(8000,()=>{
  console.log(`app is running on Port:${PORT}`);
>>>>>>> 6f3e859462d383f37c9d05f76e178b9f1876affb
})