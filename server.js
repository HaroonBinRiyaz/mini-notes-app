import express from "express";
import dotenv from "dotenv"
import { connectDB } from "./config/ConnectDB.js";


const app = express();
const port = process.env.PORT;

dotenv.config()

app.use(express.json());
app.use(express.urlencoded({extended: true}));


await connectDB();

app.listen(port, ()=>{
    console.log("The Server is running ✅");
    
});