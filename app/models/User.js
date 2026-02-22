// Import mongoose
const mongoose = require('mongoose')

// Schema for storing system users
const userSchema = new mongoose.Schema({
    // Username of the user
    username: String,

    // Email of the user
    email: String,

    // Role of the user in the CRM
    role: {
        type: String,
        enum: ['admin','agent','support']
    }
})

// Export User model
module.exports = mongoose.model('User', userSchema)
