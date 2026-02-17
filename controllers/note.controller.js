import { Note } from "../models/notes.model.js";

export const createNote = async (req, res) =>{
    const {text} = req.body;

    if(!text){
        return res.status(400).json({
            ok: false,
            message: "note text required"
        });

    }

    const note = await Note.create({
        text, 
        user: req.user.id
    });

    return res.status(201).json({
        ok:true,
        note
    })
}

export const getNotes = async (req, res) =>{
    const notes = await Note.find({user: req.user.id}).sort({ createdAt: -1 });

    res.json({
        ok: true,
        notes
    })
}