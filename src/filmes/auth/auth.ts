import * as jwt from "jsonwebtoken";
import { JwtService } from '@nestjs/jwt'
import { Injectable } from "@nestjs/common";

@Injectable()
export class Authenticator {
    constructor(private readonly jwtService: JwtService) { }

    public generateToken(input: AuthenticationData): string {
        const token = this.jwtService.sign(                       
            {
                sub: input.id,
                isAdmin: input.isAdmin
            },            
            {
                secret: "bananinha",
                expiresIn: "30d"                
            },            

        );
        console.log("token", token);
        
        return token;
    }

    public getData(token: string): AuthenticationData {
        const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
        const result = {
            id: payload.sub,
            isAdmin: payload.isAdmin
        };
        return result;
    }
}

export interface AuthenticationData {
    id: string;
    isAdmin: boolean;
}


