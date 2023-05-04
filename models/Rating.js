const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
    stars: {
        type: Number,
        required: true
    },
    review: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }
},
{
    timestamps: true
});

const Rating = mongoose.model('Rating', ratingSchema);

module.exports = Rating;