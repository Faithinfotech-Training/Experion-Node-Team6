const express = require('express');
const router = express.Router();
const bookController = require('../controller/book.controller');

router.post('/', bookController.addBook);
router.get('/', bookController.findBooks);
router.get('/:bookId', bookController.findBookById);
router.put('/:bookId', bookController.updateBook);
router.delete('/:bookId', bookController.deleteById);

module.exports = router;