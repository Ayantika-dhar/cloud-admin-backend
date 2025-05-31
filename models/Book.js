const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: String,
    price: String,
    scrapedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Book', BookSchema);
