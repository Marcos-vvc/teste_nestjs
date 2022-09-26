import { IsBoolean, IsEmail, IsString, MaxLength, MinLength } from "class-validator"
import { ApiProperty } from '@nestjs/swagger'


export class CriarUsuarioDto {

    @IsString()
    @MinLength(6)
    @MaxLength(20)
    @ApiProperty()
    readonly nome: string

    @IsString()
    @IsEmail()
    @ApiProperty()
    readonly email: string

    @IsString()
    @MinLength(6)
    @ApiProperty()
    readonly senha: string

    @IsBoolean()
    @ApiProperty()
    readonly isAdmin: boolean
}