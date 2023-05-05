import mongoose from 'mongoose';

const productSchmea = mongoose.Schema({
    img: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    highlights: {
        type: String
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

export default Product;