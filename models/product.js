const mongoose = require('mongoose');

const productSchmea = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stars: {
        type: Number
    },
    ratings: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Rating'
        }
    ]
},
{
    timestamps: true
}
);

const Product = mongoose.model('Product', productSchmea);

module.exports = Product;