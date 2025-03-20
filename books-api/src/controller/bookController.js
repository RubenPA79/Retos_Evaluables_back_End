const books = [
    { id_book: 1, id_user: 1, title: "Libro 1", type: "Ficción", author: "Autor 1", price: 10.99, photo: "foto1.jpg" },
    { id_book: 2, id_user: 2, title: "Libro 2", type: "Ciencia", author: "Autor 2", price: 15.50, photo: "foto2.jpg" }
];

// Obtener todos los libros
const getBooks = (req, res) => {
    res.json(books);
};

// Obtener un libro por ID
const getBookById = (req, res) => {
    const book = books.find(b => b.id_book == req.params.id);
    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ message: "Libro no encontrado" });
    }
};

// Agregar un libro nuevo
const addBook = (req, res) => {
    const newBook = req.body;
    books.push(newBook);
    res.status(201).json(newBook);
};

module.exports = { getBooks, getBookById, addBook };
