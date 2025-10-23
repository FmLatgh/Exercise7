const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const isAdmin = require('../middleware/adminMiddleware');
const { listBooks, addBook, deleteBook, borrowBook, returnBook } = require('../controllers/bookController');

// @route    GET api/books
// @desc     Get all books
// @access   Public
router.get('/', listBooks);

// @route    PUT api/books/:id
// @desc     Borrow a book from the library
// @access   Only for authenticated users
router.put('/borrow/:id', auth, borrowBook);

// @route    PUT api/books/:id
// @desc     Return a book to the library
// @access   Only for authenticated users
router.put('/return/:id', auth, returnBook);

// @route    POST api/books
// @desc     Add a book to the library
// @access   Only for employees library
router.post('/', auth, isAdmin, addBook);

// @route    DEL api/books
// @desc     Add a book to the library
// @access   Only for employees library
router.delete('/:id', auth, isAdmin, deleteBook);

module.exports = router;
