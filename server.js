const express = require('express') // Import the Express framework
const path = require('path') // Import the built-in Node.js path module
const app = express() // Create the Express app instance
const PORT = process.env.PORT || 3001 // Set the port number for the server

// Static files for anything in the public directory so that CSS works
app.use(express.static(path.join(__dirname, "public")))

// Middleware for parsing json and form data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Import routes
const apiRouter = require('./routes/api.js')
const htmlRouter = require('./routes/html.js')

app.use('/api', apiRouter)
app.use('/', htmlRouter)

// Start server and listen for incoming requests
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
)