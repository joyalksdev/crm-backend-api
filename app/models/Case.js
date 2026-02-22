// Import mongoose to define schema and model
const mongoose = require('mongoose')

// Schema for storing case information
const caseSchema = new mongoose.Schema({
     // Title of the case
    title: String,

     // Detailed description of the issue
    description: String,

     // Reference to the customer who created the case
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    },
      // User assigned to handle the case
    assigned_to: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    // Priority level of the case
    priority: {
        type: String,
        enum: ['low','medium','high']
    },

     // Current status of the case
    status: {
        type: String,
        enum: ['open','closed']
    },

    // Date when the case was created
    created_at: {
        type: Date,
        default: Date.now
    }
})

// Export Case model
module.exports = mongoose.model('Case', caseSchema)
