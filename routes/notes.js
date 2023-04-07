// Import the Express framework
const express = require('express')

// Import the built-in Node.js path module
const path = require('path')

// New router instance
const router = express.Router()

// Route for notes.html file
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})

router.get("/api", (req, res) => 
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
)

// Export the router
module.exports = router