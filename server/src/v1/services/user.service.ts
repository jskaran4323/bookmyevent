import { RegisterDto, UserResponseDto } from "../../dtos/auth.dto";

import { User, UserProps } from "../../models/user.model";
import { prisma } from "../../prisma/prismaClient";

 export class UserService{

    private toUserResponse(user: any): UserResponseDto {
        return {
          id: user.id.toString(),
          username: user.username,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName
        };
    }

    async getUsers(): Promise<User[]>{
      const records = await prisma.user.findMany();
      return records.map(record =>{
        const userProps: UserProps = {
            id: record.id,
            firstName: record.firstName,
            lastName: record.lastName,
            email: record.email,
            username: record.username,
            createdAt: record.createdAt,
            updatedAt: record.updatedAt
        }
      return new User(userProps);
    })
}

async createUser(userData: RegisterDto): Promise<UserResponseDto>{
    console.log("i was hit");
    console.log(userData);
    
    const user = await prisma.user.create({data :{
         firstName: userData.firstName,
          lastName: userData.lastName,
          email: userData.email,
          username: userData.username,
          password: userData.password, 
      }})
    console.log("after");
      
    
    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      username: user.username,
    };
 
}
}