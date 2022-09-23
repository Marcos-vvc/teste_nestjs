import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Favorite } from "./favorites.entity"
import { Filme } from "./filme.entity"

@Entity('usuario')
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    nome: string

    @Column()
    email: string

    @Column()
    senha: string

    @Column()
    isAdmin: boolean
   
    @OneToMany(() => Favorite, (favorite) => favorite.user_id)
    favorites: Favorite[] 

}