import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Favorite } from '../entities/favorites.entity';
import { Filme } from '../entities/filme.entity';
import { User } from '../entities/user.entity';
import { FilmesController } from '../controllers/filme.controller';
import { filmesService } from '../services/filme.service';
import { UserController } from '../controllers/user.controller';
import { userService } from '../services/user.service';
import { JwtService } from '@nestjs/jwt'
import { JwtModule } from '@nestjs/jwt'
import { Authenticator } from '../auth/auth';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [TypeOrmModule.forFeature([Filme, Favorite, User]),ConfigModule.forRoot(),
    JwtModule.register({        
        secretOrPrivateKey: "bananinha",
        signOptions: { expiresIn: "30d" }
    })
    ],
    controllers: [FilmesController, UserController],
    providers: [filmesService, userService, JwtService, Authenticator],
    exports: [userService]
})
export class FilmesModule { }
