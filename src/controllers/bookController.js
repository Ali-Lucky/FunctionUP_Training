const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    let author_id = book.author
    let publisher_id = book.publisher
   
    if(!author_id){
        return res.send({ msg : "Author id is required"})
    } else if (!await authorModel.findOne({ _id: author_id})){
       return res.send({ msg: "Not any author is present with this Id" })
    } else if (!publisher_id){
        return res.send({ msg: "Publisher id is required"})
    } else if (!await publisherModel.findOne({ _id: publisher_id})){
        return res.send({ msg: "Not any publisher is present with this Id"})
    }
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}
    

const getBooksData= async function (req, res) {
    let books = await bookModel.find().populate(['author', 'publisher'])
    res.send({data: books})
}

// const getNewBooksData = async function (req, res) {
//     let allBooks = await bookModel.updateMany({$or: [{"publisher": "63008d8a12eb9512cd21d9ab"}, {"publisher": "6300bfebdb93c2ba81d3b372"}, {"publisher": "6300bf8adb93c2ba81d3b36e"}, {"publisher": "6300bfc9db93c2ba81d3b370"}]}, {$set: {isHardCover: false}})
//     res.send({data: allBooks})
// }

const getNewBooksData = async function (req, res) {
    let my = await publisherModel.find({name: ["Penguin", "HarperCollins"]}).select({_id: 1})
    let allBooks = await bookModel.updateMany({publisher: my}, {$set: {isHardCover: true}}, {new: true})
    res.send({data: allBooks})
}

const updatedBookPrice = async function (req, res) {
    let rating = await authorModel.find({rating: {$gt: 3.5}}).select({_id: 1})
    let updatedPrice = await bookModel.updateMany({author: rating}, {$inc: {price: +10}}, {new: true})
    res.send({data: updatedPrice})
}
// let rating1 = await bookModel.updateMany({author : authorIds }, { $inc : {price :10 }},{new  : true})
  
//      res.send({ data: bookid , rating1})

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getNewBooksData = getNewBooksData
module.exports.updatedBookPrice = updatedBookPrice