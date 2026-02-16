import express from "express";
import dotenv from "dotenv"
import { connectDB } from "./config/ConnectDB.js";
import { registerUser } from "./controllers/user.controller.js";


const app = express();
const port = process.env.PORT || 3000;

dotenv.config()

app.use(express.json());
app.use(express.urlencoded({extended: true}));


await connectDB();

app.post("/register", registerUser);


app.listen(port, ()=>{
    console.log("The Server is running ✅");
    
});