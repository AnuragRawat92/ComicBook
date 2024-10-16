// Assignment from Mango Jelly 
// Anurag Rawat 
// 16/10/2024
const express = require('express');  // Import the Express library
const connectDB = require('./config/db');  // Import the function to connect to MongoDB
const comicBookRoutes = require('./routes/main');  // Import the routes for comic book CRUD operations
require('dotenv').config();  // Load environment variables from a .env file

const app = express();  // Initialize the Express application

app.use(express.json());  // Middleware to parse JSON request bodies

// Connect to MongoDB
connectDB();  // Calls the function to establish a connection to the MongoDB database

// API Routes
app.use('/api/comic-books', comicBookRoutes);  // All routes under '/api/comic-books' will be handled by comicBookRoutes

// Set the port to either the one in the environment variables or default to 3000
const PORT = process.env.PORT || 3000; 

// Start the server and listen on the specified port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));  
