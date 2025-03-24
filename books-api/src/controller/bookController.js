// src/controller/bookController.js

const books = [];

let nextId = 1;

// GET: Obtener todos los libros
const getAllBooks = (req, res) => {
  res.status(200).json(books);
};

// GET: Obtener libro por ID
const getBookById = (req, res) => {
  const id = parseInt(req.query.id);
  const book = books.find((b) => b.id_book === id);

  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({ message: "Libro no encontrado" });
  }
};

// POST: Añadir nuevo libro
const createBook = (req, res) => {
  const { id_user, title, type, author, price, photo } = req.body;

  const newBook = {
    id_book: nextId++,
    id_user,
    title,
    type,
    author,
    price,
    photo,
  };

  books.push(newBook);
  res.status(201).json(newBook);
};

// PUT: Modificar libro existente
const updateBook = (req, res) => {
  const id = parseInt(req.query.id);
  const bookIndex = books.findIndex((b) => b.id_book === id);

  if (bookIndex !== -1) {
    books[bookIndex] = { ...books[bookIndex], ...req.body };
    res.status(200).json(books[bookIndex]);
  } else {
    res.status(404).json({ message: "Libro no encontrado" });
  }
};

// DELETE: Eliminar libro por ID
const deleteBook = (req, res) => {
  const id = parseInt(req.query.id);
  const bookIndex = books.findIndex((b) => b.id_book === id);

  if (bookIndex !== -1) {
    const deleted = books.splice(bookIndex, 1);
    res.status(200).json(deleted[0]);
  } else {
    res.status(404).json({ message: "Libro no encontrado" });
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
