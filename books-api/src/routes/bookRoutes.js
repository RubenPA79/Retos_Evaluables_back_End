// src/routes/bookRoutes.js

const express = require('express');
const router = express.Router();
const {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
} = require('../controller/bookController');

// GET todos los libros
router.get('/books', getAllBooks);

// GET libro por ID
router.get('/books/search', getBookById); // Por query param ?id=1

// POST nuevo libro
router.post('/books', createBook);

// PUT actualizar libro
router.put('/books', updateBook);

// DELETE eliminar libro
router.delete('/books', deleteBook);

module.exports = router;
