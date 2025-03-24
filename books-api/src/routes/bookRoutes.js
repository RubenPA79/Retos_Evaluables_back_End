// src/routes/bookRoutes.js

const express = require('express');
const router = express.Router();
const {
    getBooks,
    getBookById,
    addBook,
    updateBook,
    deleteBook
} = require('../controller/bookController');

// GET /api/books - lista todos los libros
router.get('/', getBooks);

// GET /api/books/:id - obtiene un libro específico
router.get('/:id', getBookById);

// POST /api/books - crea un nuevo libro
router.post('/', addBook);

// PUT /api/books/:id - actualiza un libro específico
router.put('/:id', updateBook);

// DELETE /api/books/:id - elimina un libro específico
router.delete('/:id', deleteBook);

module.exports = router;
