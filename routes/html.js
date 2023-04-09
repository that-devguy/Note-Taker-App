const express = require('express') // Import the Express framework
const path = require('path') // Import the built-in Node.js path module
const router = express.Router() // New router instance

// Route for notes.html file
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})

// Route for index.html file
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

// Export the router
module.exports = router