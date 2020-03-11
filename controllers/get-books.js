const Book = require('../models/Book');

const controller = async (req, res) => {
  const books = await Book.find().populate('author');
  // console.log(books);
  res.render('books', { books: books });
}

module.exports = controller;