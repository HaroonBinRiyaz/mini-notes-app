import express from "express";
import dotenv from "dotenv"
import { connectDB } from "./config/ConnectDB.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config()

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

await connectDB();

app.use("/api", userRoutes);

app.listen(port, ()=>{
    console.log("The Server is running ✅");
    
});