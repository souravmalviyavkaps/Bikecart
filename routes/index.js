import express from 'express';
const router = express.Router();
import {home} from '../controllers/home_controller.js';
import productRoutes from "./productRoutes.js";
import userRoutes from "./userRoutes.js";

router.get("/", home);

router.use('/users', userRoutes);
router.use("/products", productRoutes);


export default router;