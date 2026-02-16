import express from "express";
import dotenv from "dotenv"
const app = express();
const port = 3000;

dotenv.config()

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res)=>{
    return res.json({
        message: "the server is working"
    })

})

app.listen(port, ()=>{
    console.log("hello world");
    
});