import Product from '../models/product.js'
import Rating from '../models/rating.js'

export const fetchProductById = async (req, res) => {
  try {
    const productId = req.params.id;

    const product = await Product.findById(productId).populate({
      path: 'ratings',
      populate: { 
        path: 'user' 
      },
    });

    return res.status(200).json({
      success: true,
      message: 'Product fetched successfully',
      data: product,
    })
  } catch (err) {
    console.log('Error in fetching product by id :', err)
    return res.status(400).json({
      success: false,
      message: 'Error in fetching product : ' + err.message,
    })
  }
}

export const addProduct = async (req, res) => {
  try {
    await Product.create(req.body)

    return res.status(200).json({
      success: true,
      message: 'Product added successfully',
    })
  } catch (error) {
    console.log('Error in adding product : ', error)
    return res.status(500).json({
      success: false,
      message: 'Internal server error' + err.message,
    })
  }
}

export const rateProduct = async (req, res) => {
  try {
    // console.log(req.body)
    let productId = req.body.productid;

    // if user already rated the same product
    let rating = await Rating.find({user: req.body.userid, product: productId});

    console.log(rating);

    if(rating.length){
      return res.status(200).json({
        message: "You have already rated this product",
        success: false
      })
    }

      rating = await Rating.create({
      user: req.body.userid,
      stars: req.body.stars,
      review: req.body.review,
      product: productId,
    })

    //push this rating to products rating array
    let product = await Product.findById(productId).populate('ratings');


    product.ratings.push(rating._id)

    //change the product avg rating as well

    let ratings = await Rating.find({ product: productId })
    // console.log(ratings);

    let sumRatings = 0

    ratings.map(rating => {
      sumRatings += rating.stars
    })
    console.log(sumRatings)
    let avgRating = Math.round(sumRatings / ratings.length);
    product.stars = avgRating
    product.save()

    return res.status(200).json({
      data: {avgRating},
      message: 'Product rated successfully !!',
      success: true
    })
  } catch (err) {
    console.log('Error while rating product : ', err)
    return res.status(500).json({
      success: false,
      message: 'Internal server error : ' + err.message,
    })
  }
}

export const fetchRating = async (req, res) => {
  try {
    const productId = req.params.id
    let product = await Product.findById(productId)
    let rating = product.stars
    if (!rating) {
      rating = 'No ratings yet'
    }
    return res.status(200).json({
      success: true,
      data: rating,
      message: 'Ratings fetched successfully !!',
    })
  } catch (err) {
    console.log('Error while fetching rating of product : ', err)
    return res.status(500).json({
      success: false,
      message: 'Internal server error : ' + err.message,
    })
  }
}

export const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id
    let product = await Product.findById(productId)
    product.remove()

    //also remove all the ratings of this product
    await Rating.deleteMany({ product: productId })

    return res.status(200).json({
      success: true,
      message: 'Product and its associated ratings removed successfully !!',
    })
  } catch (err) {
    console.log('Error while deleting product : ', err)
    return res.status(500).json({
      success: false,
      message:
        'Could not delete product and associated ratings : ' + err.message,
    })
  }
}
