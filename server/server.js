// Load env variables
if (process.env.NODE_ENV != 'production'){
    require("dotenv").config();
}

// Import dependencies
const express = require('express')
const connectToDb = require('./config/connectToDb')
const notesController = require('./controllers/notesController');
const cors = require('cors');

// Create an express app
const app = express()

// Configure express app
app.use(express.json())
app.use(cors())

// Connect to Database
connectToDb()

// Routing
app.get('/notes', notesController.fetchNotes);

app.get ('/notes/:id', notesController.fetchNote);

app.post('/notes', notesController.createNote);

app.put('/notes/:id', notesController.updateNote);

app.delete("/notes/:id", notesController.deleteNote);

// Start our server
app.listen(process.env.PORT);


//NOTES
//Post creates, delete deletes, get retrieves, put updates
