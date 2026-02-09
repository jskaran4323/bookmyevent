import { RegisterDto, UserResponseDto } from "../../dtos/auth.dto";
import { User } from "../../models/user.model";
import { UserService } from "../services/user.service";
import { Request, Response } from 'express';


export class UserController{
  
    private userService = new UserService()
    constructor(){
      this.getUsers = this.getUsers.bind(this);
    }

    async getUsers(req: Request, res: Response): Promise<void>{
    try{ 
        console.log("I ran ");
        
        const users: User[] = await this.userService.getUsers();
        console.log("i ran two ");
        
        console.log(users);
        res.status(200).json(users);
    }
    catch(error: unknown){
      console.error('Error:', error);
      res.status(500).json({ error: 'Failed to fetch user' });
    }
    }

    async createUsers(req: Request, res: Response): Promise<void>{
      try{
      
        const registerData: RegisterDto = req.body
       console.log(registerData);
       
       const data =  await this.userService.createUser(registerData)
       res.status(201).json(data);
      }
      catch(error: unknown){
        console.error('Error:', error);
      res.status(500).json({ error: 'Failed to create user' });
      }
    } 
}