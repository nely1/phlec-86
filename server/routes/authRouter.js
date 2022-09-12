import express from 'express';
const router = express.Router();
import { loginUser } from '../controllers/authController.js'
import auth from '../middleware/auth.js'

 
router.post('/', loginUser);

export default router;