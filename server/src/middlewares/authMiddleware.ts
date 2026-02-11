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
        console.log("payload", req.body.id);
        const decoded = jwt.verify(token, MY_SECRET) as { userId: string };
        console.log(decoded.userId);
        
        req.params.id = decoded.userId
        console.log(req.params.id);
        
        next();
     } catch (error) {
        res.status(401).json({ error: 'Invalid token' }); 
     }     
}