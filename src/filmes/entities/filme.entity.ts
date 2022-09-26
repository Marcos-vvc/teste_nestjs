import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Favorite } from "./favorites.entity"

@Entity('filmes')
export class Filme {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    titulo: string

    @Column()
    capa: string

    @Column()
    cover: string

    @Column()
    anoDeLancamento: string

    @Column()
    generos: string

    @Column()
    mediaIMDB: number
    
    @OneToMany(() => Favorite, (favorite) => favorite.filme)
    favorites: Favorite[] 
}



