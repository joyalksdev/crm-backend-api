// Import express and create router
const express = require('express')
const customerRouter = express.Router()

// Import controller functions for handling logic
const {createCustomer, getAllCustomers, getCustomerById, updateCustomer, deleteCustomer} = require('../controllers/customerController')

// Route to fetch list of all customers
customerRouter.get('/',getAllCustomers)

// Route to fetch one customer using its ID
customerRouter.get('/:id',getCustomerById)

// Route to add a new customer to database
customerRouter.post('/',createCustomer)

// Route to update existing customer details
customerRouter.patch('/:id',updateCustomer)

// Route to remove a customer from database
customerRouter.delete('/:id',deleteCustomer)

// Export router so it can be used in server.js
module.exports = customerRouter