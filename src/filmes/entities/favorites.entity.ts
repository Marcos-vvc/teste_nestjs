import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Filme } from "./filme.entity"
import { User } from "./user.entity"

@Entity('favoritos')
export class Favorite {
    @PrimaryGeneratedColumn("uuid")
    id: string     
    
    @JoinColumn({name: 'user_id'})
    @ManyToOne(() => User, (user)=> user.favorites)
    user: User


    @JoinColumn({name: 'filme_id'})
    @ManyToOne(() => Filme, (filme)=> filme.favorites)
    filme: Filme 

}



