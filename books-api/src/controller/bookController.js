const Book = require('../models/Book');
let books = []; // "Base de datos" temporal

// GET - todos o por id
const getBooks = (req, res, next) => {
    try {
        const { id } = req.query;

        if (id) {
            const book = books.find(b => b.id_book == id);
            if (!book) return res.status(404).json({ error: 'Libro no encontrado' });
            return res.json(book);
        }

        res.json(books);
    } catch (error) {
        next(error);
    }
};

// POST - agregar nuevo libro
const addBook = (req, res, next) => {
    try {
        const { title, author } = req.body;

        if (!title || !author) {
            return res.status(400).json({ error: 'Título y autor son requeridos' });
        }

        const newBook = new Book(req.body);
        books.push(newBook);
        res.status(201).json(newBook);
    } catch (error) {
        next(error);
    }
};

// PUT - actualizar libro por id
const updateBook = (req, res, next) => {
    try {
        const { id } = req.query;
        const index = books.findIndex(b => b.id_book == id);

        if (index === -1) return res.status(404).json({ error: 'Libro no encontrado' });

        books[index] = { ...books[index], ...req.body };
        res.json(books[index]);
    } catch (error) {
        next(error);
    }
};

// DELETE - eliminar libro por id
const deleteBook = (req, res, next) => {
    try {
        const { id } = req.query;
        const index = books.findIndex(b => b.id_book == id);

        if (index === -1) return res.status(404).json({ error: 'Libro no encontrado' });

        const deleted = books.splice(index, 1);
        res.json({ message: 'Libro eliminado', book: deleted[0] });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getBooks,
    addBook,
    updateBook,
    deleteBook
};
