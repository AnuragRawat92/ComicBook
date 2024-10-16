// Assignment from Mango Jelly 
// Anurag Rawat 
// 16/10/2024
const express = require('express');
const router = express.Router();
const { createComic, getComics, getComicById, updateComic, deleteComic } = require('../Controllers/comicBookController');

// CRUD routes
router.post('/', createComic); // Create a new comic book
router.get('/', getComics);    // Fetch all comic books (with pagination, filtering, and sorting)
router.get('/:id', getComicById); // Get a specific comic book by ID
router.put('/:id', updateComic); // Update a comic book
router.delete('/:id', deleteComic); // Delete a comic book

module.exports = router;
