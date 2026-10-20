import express from "express"
import cors from "cors"
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
  
})