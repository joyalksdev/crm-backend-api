// Import mongoose for MongoDB connection
const mongoose = require("mongoose");

// Function to connect the application to MongoDB
const connectDB = async () => {
  try {
    // Connect using the connection string stored in .
    await mongoose.connect(process.env.MONGO_URL);
    
    // Success message if DB connects
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    // If connection fails, show error and stop the server
    console.error("DB Connection Error:", error.message);
    process.exit(1);
  }
};
// Export the function so it can be used in server.js
module.exports = connectDB;