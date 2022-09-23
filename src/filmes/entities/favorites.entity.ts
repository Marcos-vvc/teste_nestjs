import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Filme } from "./filme.entity"
import { User } from "./user.entity"

@Entity('favoritos')
export class Favorite {
    @PrimaryGeneratedColumn("uuid")
    id: string     
    
    @JoinColumn()
    @ManyToOne(() => User, (user)=> user.favorites)
    user_id: User


    @JoinColumn()
    @ManyToOne(() => Filme, (filme)=> filme.favorites)
    filme_id: Filme  
  
    
 

}



