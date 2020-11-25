const mongoose = require('mongoose');

const opinionSchema = new mongoose.Schema({
    content: String,
    rating: {type: Number, min: 1, max: 5, default: 5},
}, {
    timestamps: true
});

const itemSchema = ({
    itemName: String,
    category: {
        type: String,
        enum: ['Food', 'Music', 'TV/Movies', 'Fashion']
    },
    image: String,
    uploadedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    opinion: [opinionSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Item', itemSchema);