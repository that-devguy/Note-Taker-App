// Import the Express framework
const express = require('express')

// Import the built-in Node.js path module
const path = require('path')

// Create the Express app instance
const app = express()

// Set the port number for the server
const PORT = 3001

// Import notes routes
const notesRouter = require('./routes/notes.js')

// Use the notes routes for the /notes endpoint
app.use('/notes', notesRouter)

// Route for index.html file
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))
})

// Start server and listen for incoming requests
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);