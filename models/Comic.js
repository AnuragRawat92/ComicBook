// Assignment from Mango Jelly 
// Anurag Rawat 
// 16/10/2024
const mongoose = require('mongoose');  // Import Mongoose to define the schema and model

// Define the schema for a comic book, outlining the structure of the documents in MongoDB
const comicBookSchema = new mongoose.Schema({
  
  // The name of the comic book, required field
  bookName: { 
    type: String, 
    required: true
 },

  // The name of the author of the comic book, required field
  authorName: { 
    type: String, 
    required: true 
},

  // The year the comic book was published, required field
  yearOfPublication: {
     type: Number, 
     required: true 
    },

  // The price of the comic book, required field
  price: { 
    type: Number,
     required: true
     },

  // Optional discount for the comic book, if any
  discount: { 
    type: Number 
},

  // The total number of pages in the comic book, required field
  numberOfPages: { 
    type: Number,
     required: true
     },

  // The condition of the comic book, either 'new' or 'used', required field
  condition: {
     type: String,
      enum: ['new', 'used'], 
      required: true 
    },

  // Optional description of the comic book
  description: { 
    type: String 
},

  // The date when the comic book was added to the inventory, defaults to the current date and time
  createdAt: { 
    type: Date, 
    default: Date.now
 },
});

// Export the model based on the schema, creating a 'ComicBook' model for CRUD operations
module.exports = mongoose.model('ComicBook', comicBookSchema);
