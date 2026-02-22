// Import mongoose
const mongoose = require('mongoose')

// Schema for storing customer details
const customerSchema = new mongoose.Schema({
    
    // Customer name
    name: String,
    // Customer email
    email: String,
     // Customer phone number
    phone: String,
    // Customer account status
    status: {
        type: String,
        enum: ['active','inactive']
    }
})

// Export Customer model
module.exports = mongoose.model('Customer', customerSchema)
