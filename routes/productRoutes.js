import express from 'express';
const router = express.Router();

import {addProduct, fetchRating, rateProduct} from '../controllers/products_controller.js';

router.post('/add-product', addProduct);
router.get('/fetch-rating/:id', fetchRating);
router.post('/rate-product', rateProduct);





export default router;