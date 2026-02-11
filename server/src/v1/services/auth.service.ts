import { RegisterDto, UserLoginData, UserResponseDto } from "../../dtos/auth.dto";
import { UserProps } from "../../models/user.model";
import { prisma } from "../../prisma/prismaClient";
import bcrypt from "bcrypt";




export class AuthService{


 private toUserResponse(user: any): UserResponseDto {
        return {
          id: user.id.toString(),
          username: user.username,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName
        };
    }
    async registerUser(userData: RegisterDto){
         
        const hashpassword = await bcrypt.hash(userData.password, 10)
        
          
         const user = await prisma.user.create({data:{
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            username: userData.username,
            password: hashpassword, 
         }})
         return this.toUserResponse(user)
    }

    async userLogin(userData: UserLoginData){
      const user = await prisma.user.findUnique({
        where:{
           username: userData.username,
        }})
        if(!user){
            throw new Error("Invalid username or password")
        }
        const isMatch = 
            bcrypt.compare(user.password, userData.password)


        if(!isMatch){
            throw new Error("Invalid username and password")
        }
      

        return this.toUserResponse(user);

    }
    async getMe(userId: string){
     const user = await prisma.user.findUnique({
        where: {
            id: userId
        }
     })
     console.log(user);
     
     if(!user) {
        return "user not found"
     }
     return this.toUserResponse(user)
    }

}