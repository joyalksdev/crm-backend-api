// Import express and create router 
 const express = require('express')
const userRouter = express.Router()

// Import controller functions for handling logic
const {createUser, getUsers, getUserById, updateUser, deleteUser} = require('../controllers/userController')

// Route to fetch list of all Users
userRouter.get('/',getUsers)

// Route to fetch one Users using its ID
userRouter.get('/:id',getUserById)

// Route to add a new Users to database
userRouter.post('/',createUser)

// Route to update existing Users details
userRouter.patch('/:id',updateUser)

// Route to update existing Users details
userRouter.delete('/:id',deleteUser)

// Export router so it can be used in server.js
module.exports = userRouter