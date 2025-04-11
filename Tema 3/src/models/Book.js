// Definición de la clase Book
class Book {
    constructor(id_book, id_user, title, type, author, price, photo) {
        this.id_book = id_book;
        this.id_user = id_user;
        this.title = title;
        this.type = type;
        this.author = author;
        this.price = price;
        this.photo = photo;
    }
}

// Exportamos la clase Book para utilizarla en otros archivos
module.exports = Book;