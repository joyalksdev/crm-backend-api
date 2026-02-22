// Import express and create router
const express = require('express')
const caseRouter = express.Router()

// Import controller functions for handling logic
const {createCase, getAllCases, getCaseById, updateCase, deleteCase} = require('../controllers/caseController')

// Route to fetch list of all Cases
caseRouter.get('/',getAllCases)

// Route to fetch one Case using its ID
caseRouter.get('/:id',getCaseById)

// Route to add a new Case to database
caseRouter.post('/',createCase)

// Route to update existing Case details
caseRouter.patch('/:id',updateCase)

// Route to remove a Case from database
caseRouter.delete('/:id',deleteCase)

// Export router so it can be used in server.js
module.exports = caseRouter