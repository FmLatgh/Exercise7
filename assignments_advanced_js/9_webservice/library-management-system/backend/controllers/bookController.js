// controllers/bookController.js
const Book = require('../models/Book');
const {bookValidation, calcReturnDate} = require('../utils/validators');

exports.addBook = async (req, res, next) => {
    // Validate data
    const {error} = bookValidation(req.body);
    if (error) return res.status(401).json({msg: error.details[0].message});

    const {title, author} = req.body;

    try {
        // Check if book exists
        let book = await Book.findOne({ title, author });
        if (book) return res.status(409).json({ msg: 'Book already exists.' });

        book = new Book({
            title,
            author,
            lending_details: {
                user_id: null,
                date_out: null,
                date_return: null
            },
        });

        // Save book
        let newBookId;
        await book.save()
            .then(book => res.status(200).json({ id: book._id }));
    } catch (err) {
        next(err);
    }
};

exports.listBooks = async (req, res, next) => {
    try {
        const books = await Book.find().sort({date: -1});
        res.json(books);
    } catch (err) {
        next(err);
    }
};

exports.deleteBook = async (req, res, next) => {
    try {
        // Check if book exists
        let book = await Book.findOne({_id: req.params.id});
        if (!book) return res.status(404).json({ msg: 'Book does\'t exist.' });

        const result = await Book.deleteOne({_id: req.params.id});

        res.status(200).send("Book deleted successfully.");
    } catch (err) {
        next(err);
    }
};

exports.borrowBook = async (req, res, next) => {
    try {
        const book = await Book.findOne({_id: req.params.id}).sort({date: -1});
        // Check if book exists
        if (!book) return res.status(404).json({ msg: 'Book doesn\'t exist' });

        // Check if book is available
        if(book.lending_details.user_id !== null){
            return res.status(404).json({ msg: `Book isn't available, it has been lent by someone else until ${book.lending_details.date_return.toDateString()}.` });
        }
        const dates = calcReturnDate(new Date(), process.env.MAX_DAYS_LENDING);
        book.lending_details.user_id = req.user.id;
        book.lending_details.date_out = dates.date;
        book.lending_details.date_return = dates.newDate;
        book.save();
        res.status(200).send("Book borrowed until " + dates.newDate.toDateString());
    } catch (err) {
        next(err);
    }
};

exports.returnBook = async (req, res, next) => {
    try {
        // const books = await Book.find({user: req.user.id}).sort({date: -1});
        const book = await Book.findOne({_id: req.params.id}).sort({date: -1});
        // Check if book exists
        if (!book) return res.status(404).json({ msg: 'Book doesn\'t exist.' });

        // Check if book is available
        if(book.lending_details.user_id === null){
            return res.status(404).json({ msg: `Book is already returned.` });
        }
        book.lending_details.user_id = null;
        book.lending_details.date_out = null;
        book.lending_details.date_return = null;
        book.save();

        res.status(200).send("Book returned successfully.");
    } catch (err) {
        next(err);
    }
};
