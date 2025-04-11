// Importamos el modelo Book
const Book = require('../models/Book');

// Array para almacenar los libros (simulando una base de datos)
let books = [
    new Book(1, 101, "Don Quijote de la Mancha", "Novela", "Miguel de Cervantes", 25.99, "donquijote.jpg"),
    new Book(2, 102, "Cien años de soledad", "Novela", "Gabriel García Márquez", 19.99, "cienaños.jpg"),
    new Book(3, 103, "El principito", "Ficción", "Antoine de Saint-Exupéry", 15.50, "principito.jpg"),
    new Book(4, 104, "1984", "Ciencia ficción", "George Orwell", 22.75, "1984.jpg"),
    new Book(5, 105, "Código limpio", "Programación", "Robert C. Martin", 35.00, "codigolimpio.jpg")
];

// Métodos del controlador para manejar las operaciones CRUD
const bookController = {
    // GET - Obtener un libro por su ID
    getBookById: (req, res) => {
        const id = parseInt(req.params.id);
        const book = books.find(book => book.id_book === id);
        
        if (book) {
            res.status(200).json(book);
        } else {
            res.status(404).json({ message: `Libro con ID ${id} no encontrado` });
        }
    },
    
    // GET - Obtener todos los libros
    getAllBooks: (req, res) => {
        res.status(200).json(books);
    },
    
    // POST - Añadir un nuevo libro
    addBook: (req, res) => {
        const { id_book, id_user, title, type, author, price, photo } = req.body;
        
        // Verificamos si ya existe un libro con el mismo ID
        const existingBook = books.find(book => book.id_book === id_book);
        
        if (existingBook) {
            return res.status(400).json({ message: `Ya existe un libro con el ID ${id_book}` });
        }
        
        // Creamos una nueva instancia de Book
        const newBook = new Book(id_book, id_user, title, type, author, price, photo);
        
        // Añadimos el libro al array
        books.push(newBook);
        
        res.status(201).json(newBook);
    },
    
    // PUT - Modificar un libro existente
    updateBook: (req, res) => {
        const id = parseInt(req.params.id);
        const { id_user, title, type, author, price, photo } = req.body;
        
        // Buscamos el índice del libro a actualizar
        const bookIndex = books.findIndex(book => book.id_book === id);
        
        if (bookIndex === -1) {
            return res.status(404).json({ message: `Libro con ID ${id} no encontrado` });
        }
        
        // Actualizamos los datos del libro
        books[bookIndex] = {
            ...books[bookIndex],
            id_user: id_user || books[bookIndex].id_user,
            title: title || books[bookIndex].title,
            type: type || books[bookIndex].type,
            author: author || books[bookIndex].author,
            price: price || books[bookIndex].price,
            photo: photo || books[bookIndex].photo
        };
        
        res.status(200).json(books[bookIndex]);
    },
    
    // DELETE - Eliminar un libro
    deleteBook: (req, res) => {
        const id = parseInt(req.params.id);
        
        // Comprobamos si existe el libro
        const bookIndex = books.findIndex(book => book.id_book === id);
        
        if (bookIndex === -1) {
            return res.status(404).json({ message: `Libro con ID ${id} no encontrado` });
        }
        
        // Eliminamos el libro del array
        const deletedBook = books.splice(bookIndex, 1)[0];
        
        res.status(200).json({ message: `Libro con ID ${id} eliminado correctamente`, book: deletedBook });
    }
};

module.exports = bookController;