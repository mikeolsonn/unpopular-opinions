const mongoose = require('mongoose');
const opinions = require('../controllers/opinions');

const commentSchema = new mongoose.Schema({
    review: String,
    rating: {type: Number, min: 1, max: 5, default: 5},
}, {
    timestamps: true
});

const opinionSchema = new mongoose.Schema({
    itemName: String,
    caption: String,
    rating: {type: Number, min: 1, max: 5},
    category: {type: String, enum: ['Food', 'Music', 'TV/Movies', 'Fashion']},
    image: { data: Buffer, contentType: String},
    // uploadedBy: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User'
    // },
    comment: [commentSchema]

}, {
    timestamps: true
});


module.exports = mongoose.model('Opinion', opinionSchema);