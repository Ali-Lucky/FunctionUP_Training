const bookModel = require("../models/bookModel")
const BookModel = require("../models/bookModel")

const createBook = async function (req, res) {
    let data = req.body
    let savedData = await BookModel.create(data)
    res.send({ msg: savedData })
}

//   # 1 ....................................................................................
const getBooksData = async function (req, res) {
    let allBooks = await BookModel.find()
    res.send({ msg: allBooks })
}

//   # 2 ...............................................................................
const bookList = async function (req, res) {
    let allBooks = await BookModel.find().select({bookName: 1, authorName: 1, _id: 0})
    res.send({ msg: allBooks })
}

//   # 3 .....................................................................................
const getBooksInYear = async function (req, res) {
    let newYear = req.query.year
    let allBooks = await BookModel.find({year: newYear})
    res.send({ msg: allBooks})
}

//   # 4 ................................................................................
const getParticularBooks = async function (req,res) {
    let allBooks = await BookModel.find(req.body)
    res.send({ msg: allBooks })
}

//   # 5 .................................................................................
const getXINRBooks = async function (req,res) {
    let allBooks = await BookModel.find({"prices.indianPrice": {$in: ["100INR", "200INR", "400INR"]}})
    res.send({ msg: allBooks })
}

//   # 6 ......................................................................................
getRandomBooks = async function (req, res) {
    let allBooks = await BookModel.find({$or: [{stockAvailable: true}, {totalPages: {$gt: 500}}]})
    res.send({ msg: allBooks })
}
// const getBooksInYear = async function (req,res) {
//     // let year = req.body.year
//     // let allBook1 = await BookModel.find({year: year})
    
// res.send({msg: allBook1})
// }



module.exports.createBook = createBook;
module.exports.getBooksData = getBooksData;
module.exports.getBooksInYear = getBooksInYear;
module.exports.bookList = bookList;
module.exports.getParticularBooks = getParticularBooks;
module.exports.getRandomBooks = getRandomBooks;
module.exports.getXINRBooks = getXINRBooks