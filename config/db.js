// Assignment from Mango Jelly 
// Anurag Rawat 
// 16/10/2024
const mongoose = require('mongoose');  // Import Mongoose to manage MongoDB connections

// Function to connect to MongoDB database
const connectDB = async () => {
  try {
    // Connect to MongoDB using the connection string from environment variables (MONGODB_URL)
    await mongoose.connect(process.env.MONGODB_URL, {});

    // If the connection is successful, log a success message
    console.log('MongoDB connected');
  } catch (error) {
    // If there is an error during connection, log the error
    console.error('MongoDB connection error:', error);

    // Exit the process with failure (1) to indicate an error in connecting to the database
    process.exit(1);
  }
};

// Export the connectDB function to be used in other files
module.exports = connectDB;
