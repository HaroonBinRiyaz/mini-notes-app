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
        user: req.user.id //from auth middleware
    });

    return res.status(201).json({
        ok:true,
        note
    })
}

export const getNotes = async (req, res) =>{
    const notes = await Note.find({user: req.user.id}).sort({ createdAt: -1 });

    return res.json({
        ok: true,
        notes
    })
}

export const deleteNote = async (req, res) =>{
    try {

        const noteId = req.params.id

        const note = await Note.findById(noteId);
        if(!note){

            return res.status(404).json({
                ok: false,
                message: "Note not found"
            })
        }

        //Checking ownership
        if(note.user.toString() !== req.user.id ){
            return res.status(403).json({
                ok: false,
                message: "Not allowed"
            })
        }

        await Note.findByIdAndDelete(noteId);
        return res.status(200).json({
            ok: true,
            message: "Note deleted sucessfully"
        })


        
    } catch (error) {

        return res.status(500).json({
            ok: false,
            message: "Server error"
        })
        
    }

}