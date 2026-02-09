import dotenv from 'dotenv';
dotenv.config();
import app from "./app";
import { Request, Response } from "express";
import { prisma } from "./prisma/prismaClient";


 const PORT = process.env.PORT || 3000;
const startServer = async (): Promise<void> =>{
    try{
        await prisma.$connect();
        console.log("connected to database");
        
        app.listen(PORT, ()=>{
            console.log("app running on port: " + PORT)
        } )
    }
    catch(error: unknown){
        console.log(error);
    }
}
app.get("/health", (req: Request, res: Response) => {
    res.status(200).json({ 
      status: "ok", 
      timestamp: new Date().toISOString() 
    });
  });


startServer();