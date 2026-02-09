import { UUID } from "node:crypto";

export interface UserProps{
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    username: string
    password?: string,
    createdAt: Date,
    updatedAt: Date
}


export class User{
    private id : string;
    private firstName: string;
    private lastName: string;
    private email: string;
    private username: string;
    private password?: string;
    private createdAt: Date;
    private updatedAt: Date;


    constructor(props: UserProps){
        this.id = props.id;
        this.firstName = props.firstName
        this.lastName = props.lastName
        this.email = props.email
        this.password = props.password
        this.username = props.username
        this.createdAt = props.createdAt
        this.updatedAt = props.updatedAt

    }
    
    getId(){
        return this.id
    }
    getFirstName(){
        return this.firstName
    }
    getLastName(){
        return this.lastName
    }
    getUsername(){
        return this.username
    }
    getEmail(){
        return this.email
    }
    getCreatedAt(){
        return this.createdAt
    }
    getUpdatedAt(){
        return this.updatedAt
    }
    toPersistance(){
        return {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            username: this.username,
            email: this.email,
            createdAt: this.createdAt,
            updatedAt :this.updatedAt,
    }
        }
    }

