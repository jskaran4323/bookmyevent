import express from 'express';
import { Response } from 'express';
import { verifyToken } from '../../middlewares/authMiddleware';
const router = express.Router();


router.get('/', verifyToken, (res: Response)=>{
    res.status(200).json({message: "Protected Route accessed"})
})

export default router;