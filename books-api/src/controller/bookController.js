// src/controller/bookController.js

const Book = require('../models/Book');
let books = []; // Memoria temporal simulando una base de datos

// GET todos o uno
const getBooks = (req, res) => {
    res.status(200).json(books);
};

const getBookById = (req, res) => {
    const book = books.find(b => b.id_book == req.params.id);
    if (!book) {
        return res.status(404).json({ error: "Libro no encontrado" });
    }
    res.status(200).json(book);
};

// POST
const addBook = (req, res) => {
    const data = req.body;

    if (!data.title || !data.author) {
        return res.status(400).json({ error: "Título y autor son requeridos" });
    }

    const newBook = new Book({
        ...data,
        id_book: Date.now()
    });

    books.push(newBook);
    res.status(201).json(newBook);
};

// PUT
const updateBook = (req, res) => {
    const id = req.params.id;
    const index = books.findIndex(b => b.id_book == id);

    if (index === -1) {
        return res.status(404).json({ error: "Libro no encontrado" });
    }

    books[index] = {
        ...books[index],
        ...req.body
    };

    res.status(200).json(books[index]);
};

// DELETE
const deleteBook = (req, res) => {
    const id = req.params.id;
    const index = books.findIndex(b => b.id_book == id);

    if (index === -1) {
        return res.status(404).json({ error: "Libro no encontrado" });
    }

    const deleted = books.splice(index, 1);
    res.status(200).json({ message: "Libro eliminado", book: deleted[0] });
};

module.exports = {
    getBooks,
    getBookById,
    addBook,
    updateBook,
    deleteBook
};
