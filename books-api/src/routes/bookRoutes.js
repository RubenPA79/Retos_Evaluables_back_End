const express = require('express');
const router = express.Router();
const {
    getBooks,
    addBook,
    updateBook,
    deleteBook
} = require('../controller/bookController');

router.get('/', getBooks);
router.post('/', addBook);
router.put('/', updateBook);
router.delete('/', deleteBook);

module.exports = router;
