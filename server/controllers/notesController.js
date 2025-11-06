const Note = require('../models/note');

const fetchNotes = async (req, res) => {
    // Find the notes
    const notes = await Note.find()
    // Respond with them
    res.json({notes})
}

const fetchNote = async (req, res) => {
    // Get id off the url
    const noteID = req.params.id;
    //Find the note using id
    const note = await Note.findById(noteID)
    //Respond with it
    res.json({note})
}

const createNote = async (req, res) => {
    // Get the sent in data off request body
    const {title, body} = req.body;
    // Create a note with it
    const note = await Note.create({
        title: title,
        body: body,
    })
    // Respond with the new note
    res.json({note})

}

const updateNote = async (req, res) => {
    // Get the ID off the URL
    const noteID = req.params.id;
    // Get the data off the req body
    const {title, body} = req.body;
    // Find and update the record
    await Note.findByIdAndUpdate(noteID, {
        title,
        body,
    })

    // Find updated note (so that it doesn't send back the old note)
    const note = await Note.findById(noteID)
    //Respond with it too
    res.json({note})
}

const deleteNote = async (req, res) => {
    // get id off url
    const noteID = req.params.id;
    // delete the record
    await Note.deleteOne({_id: noteID})
    // respond
    res.json({success: "Record deleted"})
}

module.exports = {
    fetchNotes,
    fetchNote,
    createNote,
    updateNote,
    deleteNote,
}