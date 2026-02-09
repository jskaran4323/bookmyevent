export interface RegisterDto{
    username: string,
    email: string,
    password: string,
    firstName: string,
    lastName: string
}

export interface UserResponseDto{
    id: string;     
    username: string,
    email: string,
    firstName: string,
    lastName: string
}