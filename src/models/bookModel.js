const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    // bookName: {
    //     type: String,
    //     unique: true,
    //     required: true
    // },
    // authorName: String,
    // category: {
    //     type: String,
    //     enum: ["novel", "biography", "history", "literature"]
    // },
    // year: Number
    bookName: {
        type: String,
        required: true
    },
    authorName: String, 
    tags: [String],
    
    isPublished: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    year: {
        type: Number,
        default: 2021
    },
    totalPages: Number,
    stockAvailable: Boolean,
    sales: {type: Number, default: 10}
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema)