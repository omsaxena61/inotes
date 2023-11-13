const express = require("express");
const router = express.Router();
var fetchuser = require("../middleware/fetchuser");
const Note = require("../models/Notes");
const { body, validationResult } = require("express-validator");
//ROUTE1 //ge all the notes using :POST "/api/notes/fetchallnotes'".  login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("some error occured");
  }
});

//ROUTE2 ge all the notes using :POST "/api/notesaddnotes'".  login required
router.get(
  "/addnote",
  fetchuser,
  body("title", "name must be atleast 3 letters").isLength({ min: 5 }),
  body("description", "enter a valid description minmum 5"),
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      const errors = validationResult(req);
      console.log(!errors.isEmpty());
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      //  It creates a new instance of the Note model, populating it with the provided title, description, and tag, and associating it with the user ID from the authenticated user (req.user.id).
      const note = new Note({ title, description, tag, user: req.user.id });
      const savednote = await note.save();
      res.json(savednote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some error occured");
    }
  }
);

// /ROUTE3 update an existing notes using :PUT "/api/notes/updatenotes'".  login required4
router.put("/updatenote/:id", fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;
  try {
    //create a new note object
    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }

    //find the note to be updated and update it
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("not found");
    }
    //here we are matching that the user who want to update data is  trying to update in his account or anyone else by matching id we get from auth token and id in notes whom we are updating//
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("not allowed");
    }

    note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      // if we want to add adidtional entity in it
      { new: true }
    );

    res.json({ note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("some error occured");
  }
});

// /ROUTE4 delete an existing notes using :Delte "/api/notes/deletenotes'".  login required
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  try {
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("not found");
    }
    //allow deletion only if user is verified
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("not allowed");
    }

    note = await Note.findByIdAndDelete(req.params.id);

    res.json({ sucess: "Note has been deleted", note: note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("some error occured");
  }
});

module.exports = router;
