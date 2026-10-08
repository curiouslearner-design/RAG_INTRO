import express from "express"
import cors from "cors"
import route from "./routes/DailyDose";
import { configDotenv } from "dotenv";
configDotenv();
const PORT=process.env.PORT || 8000;
const app=express()

app.use(cors);
app.use("/getDailyDose",route);

app.listen(8000,()=>{
  console.log(`app is running on Port:${PORT}`);
})