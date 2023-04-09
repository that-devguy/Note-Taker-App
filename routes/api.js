const express = require('express') // Import the Express framework
const router = express.Router() // New router instance
const { v4: uuidv4 } = require('uuid') // Generates unique identifiers
const { readAndAppend, readFromFile } = require('../helpers/fsUtils')

router.get("/notes", (req, res) => 
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
)

router.post("/notes", (req, res) => {
    const { title, text } = req.body

    if (title && text) {
        const newNote = {
            id: uuidv4(),
            title,
            text,
          }

        readAndAppend(newNote, './db/db.json')

        const response = {
            status: 'success',
            body: newNote
          }

        res.json(response)
    } else {
        res.json('Error in posting note');
    }  
})
// Export the router
module.exports = router