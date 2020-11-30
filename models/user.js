const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatarURL: String,
    googleId: String,
    opinions: [{type: Schema.Types.ObjectId, ref: 'Opinion'}],
}, { 
    timestamps: true 
});

module.exports = mongoose.model('User', userSchema);