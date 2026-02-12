import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from "express";



const MY_SECRET = process.env.JWT_SECRET || "";

export function verifyToken(req: Request, res: Response, next: NextFunction){
   const authHeader = req.header('Authorization')
  
   
    if(!authHeader) return res.status(401).json({error: "Access denied"})

        const token = authHeader.startsWith('Bearer ') 
        ? authHeader.slice(7) 
        : authHeader;

     try {
        const decoded = jwt.verify(token, MY_SECRET) as { userId: string };
     
        (req as any).user = { id: decoded.userId };
    
        
        next();
     } catch (error) {
        res.status(401).json({ error: 'Invalid token' }); 
     }     
}