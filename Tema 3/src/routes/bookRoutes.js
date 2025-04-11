// Importamos Express para crear las rutas
const express = require('express');
const router = express.Router();

// Importamos el controlador de libros
const bookController = require('../controllers/bookController');

// Definimos las rutas según los endpoints solicitados
router.get('/books/:id', bookController.getBookById);       // GET /books?id=5
router.get('/books', bookController.getAllBooks);          // GET /books
router.post('/books', bookController.addBook);             // POST /books
router.put('/books/:id', bookController.updateBook);       // PUT /books
router.delete('/books/:id', bookController.deleteBook);    // DEL /books

// Exportamos el router
module.exports = router;