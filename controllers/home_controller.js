const Product = require('../models/product');

module.exports.home = async (req, res)=>{
    try {
        
        let products = await Product.find({});
    
        res.status(200).json({
            products
        })
    } catch (error) {
        console.log("Error while sending home data : ", error);
        res.status(500).json({
            message: "Internal server error"
        })
    }
}

