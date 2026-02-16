import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },

    password:{
        type: String,
        required: true,
        select: false //store in database but dont show in normal queries unless explicitly requested
    },

},
    {timestamps: true}// automatically adds creation and updation times of the designed schema

);

const User = mongoose.model("User", userSchema); // User becomes a model (class) that maps the users collection based on userSchema (design)

export {User}