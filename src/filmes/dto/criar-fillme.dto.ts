import { IsString } from "class-validator"

export class CriarFilmeDto {
    @IsString()
    readonly titulo: string

    @IsString()
    readonly capa: string

    @IsString()
    readonly cover: string

    @IsString()
    readonly anoDeLancamento: string

    @IsString()
    readonly generos: string

    @IsString()
    readonly mediaIMDB: number
}



