// Load environment variables from .env file
require('dotenv').config()

// Import Express framework
const express = require('express')
const app = express()

// Import database connection function
const connectDB = require("./config/db");

// Import route handlers
const caseRoutes = require('./app/routes/caseRoutes')
const customerRoutes = require('./app/routes/customerRoutes')
const userRouter = require('./app/routes/userRoutes')

// Middleware to parse incoming JSON requests
app.use(express.json())

// Connect to MongoDB database
connectDB()

// Register API routes
// Customer related endpoints
app.use('/api/customers',customerRoutes)

// Case related endpoints
app.use('/api/cases',caseRoutes)

// User related endpoints
app.use('/api/users',userRouter)

// Define server port (from .env or default 3000)
const port = process.env.PORT || 3000;

// Start the server
app.listen(port,()=>{
    console.log(`Server Started at (port:${port})`)
})