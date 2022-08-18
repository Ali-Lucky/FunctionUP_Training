const express = require('express');

const router = express.Router();


const allController = require('../controllers/bookController')



router.post('/createNewAuthor', allController.createNewAuthor)
router.post('/createNewBook', allController.createNewBook)
router.get('/booksById', allController.booksById)
router.get('/updatedBookPrice', allController.upadatedBookPrice)
router.get('/authorsName', allController.authorsName)

module.exports = router;