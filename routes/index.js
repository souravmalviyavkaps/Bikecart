import express from 'express';
const router = express.Router();
import {home} from '../controllers/home_controller.js';
import productRoutes from "./productRoutes.js";
import userRoutes from "./userRoutes.js";
import ratingRoutes from "./ratingRoutes.js";

router.get("/", home);

router.use('/users', userRoutes);
router.use("/products", productRoutes);
router.use("/rating", ratingRoutes);


export default router;