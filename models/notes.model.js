import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    text:{
        type: String,
        required: true
    },

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, {timestamps: true});

export const Note = mongoose.model("Note", noteSchema);