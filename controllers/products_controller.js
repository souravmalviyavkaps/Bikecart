import Product from '../models/product.js';

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