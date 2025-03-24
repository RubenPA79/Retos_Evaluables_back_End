// src/models/Book.js

class Book {
    constructor(data) {
        this.id_book = data.id_book || Date.now();
        this.id_user = data.id_user;
        this.title = data.title;
        this.type = data.type;
        this.author = data.author;
        this.price = data.price;
        this.photo = data.photo;
    }
}

module.exports = Book;
