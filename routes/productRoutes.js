import express from 'express';
const router = express.Router();

import {addProduct, fetchRating, rateProduct, deleteProduct} from '../controllers/products_controller.js';

router.post('/add-product', addProduct);
router.get('/fetch-rating/:id', fetchRating);
router.post('/rate-product', rateProduct);
router.delete('/delete-product/:id', deleteProduct);




export default router;