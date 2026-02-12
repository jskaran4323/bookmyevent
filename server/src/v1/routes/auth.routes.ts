import express from 'express';

import { AuthController } from '../controllers/auth.controller';
import { verifyToken } from '../../middlewares/authMiddleware';

const router = express.Router()

 const authController = new AuthController()
router.post("/register", (req, res) => authController.registerUser(req, res))
router.post("/login", (req, res)=> authController.loginUser(req, res))
router.post("/userInfo",  verifyToken ,(req, res)=> authController.getUserInformation(req, res))

export default router;
