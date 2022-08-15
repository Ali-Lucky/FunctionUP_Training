const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        unique: true,
        required: true
    },
    authorName: String,
    category: {
        type: String,
        enum: ["novel", "biography", "history", "literature"]
    },
    year: Number
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema)