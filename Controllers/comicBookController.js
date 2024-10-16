// Assignment from Mango Jelly 
// Anurag Rawat 
// 16/10/2024
const ComicBook =require("../models/Comic")

// Create a comic book
exports.createComic = async (req, res) => {
  try {
    const comicBook = new ComicBook(req.body);
    await comicBook.save();
    res.status(201).json(comicBook);
  } catch (error) {
    res.status(400).json({ message: 'Error creating comic book', error });
  }
};

// Fetch comic books with pagination, filtering, and sorting
exports.getComics = async (req, res) => {
  try {
    const { page = 1, limit = 10, sort = 'bookName', ...filters } = req.query;
    const comics = await ComicBook.find(filters)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort(sort);
    const count = await ComicBook.countDocuments(filters);
    res.json({
      total: count,
      page: page,
      comics: comics,
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error fetching comics', error });
  }
};

// Get comic book details by ID
exports.getComicById = async (req, res) => {
  try {
    const comic = await ComicBook.findById(req.params.id);
    if (!comic) return res.status(404).json({ message: 'Comic book not found' });
    res.json(comic);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching comic book', error });
  }
};

// Update comic book
exports.updateComic = async (req, res) => {
  try {
    const comic = await ComicBook.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!comic) return res.status(404).json({ message: 'Comic book not found' });
    res.json(comic);
  } catch (error) {
    res.status(400).json({ message: 'Error updating comic book', error });
  }
};

// Delete comic book
exports.deleteComic = async (req, res) => {
  try {
    const comic = await ComicBook.findByIdAndDelete(req.params.id);
    if (!comic) return res.status(404).json({ message: 'Comic book not found' });
    res.json({ message: 'Comic book deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting comic book', error });
  }
};
