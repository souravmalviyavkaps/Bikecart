import express from 'express';
const router = express.Router();

import {addProduct} from '../controllers/products_controller.js';

router.post('/add-product', addProduct);




export default router;