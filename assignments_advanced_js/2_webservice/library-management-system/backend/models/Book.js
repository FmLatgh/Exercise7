// models/Book.js
const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  lending_details: {
    user_id: {
      type: String,
      required: false
    },
    date_out: {
      type: Date,
      required:false
    },
    date_return: {
      type: Date,
      required: false
    }
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Book', BookSchema);
