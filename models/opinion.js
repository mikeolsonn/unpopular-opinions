const mongoose = require('mongoose');
const opinions = require('../controllers/opinions');
const Schema = mongoose.Schema;

const commentSchema = new mongoose.Schema({
    review: String,
    rating: {type: Number, min: 1, max: 5},
}, {
    timestamps: true
});

const opinionSchema = new mongoose.Schema({
    itemName: String,
    caption: String,
    rating: {type: Number, min: 1, max: 5},
    category: {type: String, enum: ['Food', 'Music', 'TV/Movies', 'Fashion', 'Miscellaneous']},
    image: { data: Buffer, contentType: String},
    comment: [commentSchema],

}, {
    timestamps: true
});


module.exports = mongoose.model('Opinion', opinionSchema);