const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

console.log("📚 Rutas de libros cargadas correctamente"); // 👀 Para depuración

let books = [
    new Book(1, 1, "Libro 1", "Ficción", "Autor 1", 10.99, "foto1.jpg"),
    new Book(2, 2, "Libro 2", "No Ficción", "Autor 2", 15.99, "foto2.jpg")
];

// ✅ Ruta de prueba para verificar si las rutas están funcionando
router.get('/test', (req, res) => {
    res.send("✅ Ruta de prueba funcionando");
});

// ✅ Obtener todos los libros
router.get('/books', (req, res) => {
    res.json(books);
});

// ✅ Obtener un libro por ID
router.get('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(b => b.id_book === id);
    book ? res.json(book) : res.status(404).json({ message: "Libro no encontrado" });
});

// ✅ Agregar un nuevo libro
router.post('/books', (req, res) => {
    console.log("📩 Recibida petición POST /books", req.body); // 👀 Para depuración

    const { id_book, id_user, title, type, author, price, photo } = req.body;
    
    // Validar que todos los campos existen
    if (!id_book || !id_user || !title || !type || !author || !price || !photo) {
        return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }

    const newBook = new Book(id_book, id_user, title, type, author, price, photo);
    books.push(newBook);
    res.status(201).json(newBook);
});

// ✅ Modificar un libro existente
router.put('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { title, type, author, price, photo } = req.body;
    let book = books.find(b => b.id_book === id);

    if (book) {
        book.title = title;
        book.type = type;
        book.author = author;
        book.price = price;
        book.photo = photo;
        res.json(book);
    } else {
        res.status(404).json({ message: "Libro no encontrado" });
    }
});

// ✅ Eliminar un libro
router.delete('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = books.findIndex(b => b.id_book === id);
    
    if (index !== -1) {
        books.splice(index, 1);
        res.json({ message: "Libro eliminado" });
    } else {
        res.status(404).json({ message: "Libro no encontrado" });
    }
});

module.exports = router;
