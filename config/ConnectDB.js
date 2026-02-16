import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        const uri = process.env.MONGO_URI;
        if(!uri) throw new Error("MongoDB uri is missing in .env");

        await mongoose.connect(uri);
        console.log("Database Connected 📊");
        
    } catch (err) {
        console.error("MongoDB connection error: ", err.message);
        process.exit(1);
        
    }
}

export {connectDB};