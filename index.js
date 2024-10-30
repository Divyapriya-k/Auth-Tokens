import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Database/db.config.js";
import userRoute from "./Routers/user.router.js"

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

connectDB();

app.get("/",(req,res)=>{
    res.status(200).send("WELCOME TO OUR API")
})

app.use("/api/auth",userRoute)

const port= process.env.port || 5000;

app.listen(port,()=>{
    console.log("server started and running on the port");
    
})