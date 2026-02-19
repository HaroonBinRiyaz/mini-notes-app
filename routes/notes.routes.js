import express from "express";
import { createNote, getNotes, deleteNote } from "../controllers/note.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/notes", auth, createNote);
router.get("/notes", auth, getNotes);
router.delete("/notes/delete/:id", auth, deleteNote);


export default router;
