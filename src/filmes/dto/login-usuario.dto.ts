import { IsEmail, IsString, MinLength,  } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';


export class LoginUsuarioDto {   

    @IsString()
    @IsEmail()
    @ApiProperty()
    readonly email: string

    @IsString()
    @MinLength(6)
    @ApiProperty()
    readonly senha: string

  
}