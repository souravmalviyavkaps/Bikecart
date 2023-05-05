import Product from '../models/product.js';
import Rating from '../models/rating.js'

export const addProduct = async (req, res)=>{
    try {
        await Product.create(req.body);

        return res.status(200).json({
            message: "Product added successfully"
        })
        
    } catch (error) {
        console.log("Error in adding product : ", error);
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}

export const rateProduct = async (req, res)=>{
    try{

        let productId = req.body.productid;

        let rating = await Rating.create({
            user: req.user._id,
            stars: req.body.stars,
            review: req.body.review,
            product: req.body.productid
        });

        //push this rating to products rating array
        let product = await Product.findById(productId);
        product.ratings.push(rating);
        product.save();
        
        //change the product avg rating as well 
        
        let ratings = await Rating.find({product: productId}).populate('product');
        let sumRatings = ratings.reduce((a, b)=> a+b);
        let avgRating = sumRatings / 5;
        product.stars = avgRating;
        product.save();
        
    }catch(err){
        console.log("Error while rating product : ", err);
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}

export const fetchRating = async (req, res)=>{
    
    try {
        const productId = req.params.id;
        let product = await Product.findById(productId);
        let rating = product.stars;
        if(!rating){
            rating = "No ratings yet"
        }
        return res.status(200).json({
            rating: rating
        })

    } catch (err) {
        console.log("Error while fetching rating of product : ", err);
        return res.status(500).json({
            message: "Internal server error"
        })        
    }
} 

