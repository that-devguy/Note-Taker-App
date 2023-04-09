// Import the Express framework
const express = require('express')

// Import the built-in Node.js path module
const path = require('path')

// New router instance
const router = express.Router()

// Route for notes.html file
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})

// Route for index.html file
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
  })

// Export the router
module.exports = router