import { IsNotEmpty, IsString } from "class-validator"

export class AdminDTO {

    _id: string
    
    @IsString()
    name: string
    
    @IsNotEmpty()
    username: string
    
    @IsNotEmpty()
    password: string
}