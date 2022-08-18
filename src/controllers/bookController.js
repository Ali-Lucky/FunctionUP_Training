const authorModel = require('../models/authorModel')
const bookModel = require('../models/bookModel')

const createNewAuthor = async function (req,res) {
    const reqAuthor = req.body;
    const SavedData = await authorModel.create(reqAuthor)
    res.send( {msg : SavedData})
    
}

const createNewBook = async function (req,res) {
    const reqBook = req.body;
    const Saved = await bookModel.create(reqBook)
    res.send( {msg : Saved})
    
}

//   # 1 ..................................................................................................

const booksById = async function(req, res) {
    const authorDetails = await authorModel.find({author_name: "Chetan Bhagat"})
    const id = authorDetails[0].author_id
    const booksName = await bookModel.find({author_id: id}).select({name:1, _id: 0})
    res.send( {msg: booksName})
}

//   # 2................................................................................................................
const upadatedBookPrice = async function (req, res) {
    let bookDetails = await bookModel.findOneAndUpdate({ name: "Two states"}, {$set: {price: 100}}, {new: true})
    let updatedPrice = bookDetails.price
    let authorUpdate = await authorModel.find({author_id: {$eq: bookDetails.author_id}}).select({author_name: 1, _id: 0})
    res.send({msg: authorUpdate, updatedPrice})
}

 // const bookDetails = await bookModel.find({name:"Two states"})
    // const id = bookDetails[0].author_id
    // const authorN = await authorModel.find({author_id:id}).select({author_name:1, _id:0})
    // const bkName = bookDetails[0].name
    // const updatedPrice = await bookModel.findOneAndUpdate({name:bkName}, {price:100},{new:true}).select({price:1, _id:0})
    // res.send({msg:authorN, updatedPrice})

//   # 3 ...........................................................................................................

const authorsName = async function (req,res) {
    const booksId= await bookModel.find({price: {$gte:50, $lte:100}})
    const id = booksId.map(x => x.author_id)
    let arr =[]
    for(let i=0; i<id.length; i++) {
        let a = id[i]
        const author = await authorModel.find({author_id:a}).select({author_name:1, _id:0})
        arr.push(author)
    }
   const authorName = arr.flat()
  res.send({msg:authorName})
}

// let range = await bookModel.find({price: {$gte: 50, $lte:100}})
// let a = range.map(x => x.author_id)
// let newrange = await authorModel.find({author_id: a}).select({author_name: 1, _id: 0})
// res.send({msg:newrange})
// }



module.exports.createNewAuthor = createNewAuthor
module.exports.createNewBook = createNewBook
module.exports.booksById = booksById
module.exports.upadatedBookPrice = upadatedBookPrice
module.exports.authorsName = authorsName