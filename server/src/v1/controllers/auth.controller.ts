import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";
import { RegisterDto, UserLoginData } from "../../dtos/auth.dto";
import jwt from 'jsonwebtoken';
export class AuthController{
    
    private authService =  new AuthService(); 
   
     private token = process.env.JWT_SECRET || '';

    async registerUser(req: Request, res: Response): Promise<void>{
       const userData: RegisterDto = req.body;
       try{
       const user = await this.authService.registerUser(userData)
       res.status(201).json(user)  
       }
       catch(error: unknown){
        res.status(500).json({error: "Failed to create user"})
       }
    }

    async loginUser(req: Request, res: Response): Promise<void>{
        const userLoginInfo: UserLoginData = req.body;
        try{
            const user = await this.authService.userLogin(userLoginInfo)
        
            const token = jwt.sign({userId: user.id}, this.token, {
                expiresIn: '1h'
            })
    
            res.status(201).json({token})
        }
        catch(error: unknown){
            console.log(error);
            
            res.status(500).json({error: "Failed to login user"})
           }
    }

    async getUserInformation(req: Request, res: Response): Promise<void>{
        const userId: string = req.body.id;
        console.log(userId);
        
        try{
            const user = await this.authService.getMe(userId)
            console.log(user);
            
            res.status(201).json(user)
        }
        catch(error: unknown){
            console.log(error);
            
            res.status(500).json({error: "Failed to get user"})
           }
    }
}