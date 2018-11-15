const express = require('express');
const router = express.Router();
const Book = require('../models/book.js');

/* GET home page */
router.get('/books', (req, res, next) => {
  Book.find({title: {$exists: true}})
    .then(books => {
      res.render("books", { books });
    })
    .catch(error => {
      console.log(error)
    })
});

module.exports = router;
