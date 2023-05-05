import express from 'express';
const router = express.Router();
import {create, createSession} from '../controllers/users_controller.js';


router.post('/create', create);
router.post('/create-session', createSession);



export default router;