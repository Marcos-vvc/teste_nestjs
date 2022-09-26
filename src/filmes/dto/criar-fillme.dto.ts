import { IsNumber, IsString } from "class-validator"
import { ApiProperty } from '@nestjs/swagger'


export class CriarFilmeDto {
    @IsString()
    @ApiProperty()
    readonly titulo: string
    
    @IsString()
    @ApiProperty()
    readonly capa: string

    @IsString()
    @ApiProperty()
    readonly cover: string

    @IsString()
    @ApiProperty()
    readonly anoDeLancamento: string

    @IsString()
    @ApiProperty()
    readonly generos: string

    @IsNumber()
    @ApiProperty()
    readonly mediaIMDB: number
}



