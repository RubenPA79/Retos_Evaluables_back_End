class Book {
    constructor(data) {
        this.id_book = data.id_book || Date.now(); // ID único
        this.id_user = data.id_user || null;
        this.title = data.title;
        this.type = data.type || null;
        this.author = data.author;
        this.price = data.price || null;
        this.photo = data.photo || null;
    }
}

module.exports = Book;
