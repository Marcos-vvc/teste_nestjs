import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Favorite } from '../entities/favorites.entity';
import { Filme } from '../entities/filme.entity';
import { User } from '../entities/user.entity';
import { FilmesController } from '../controllers/filme.controller';
import { filmesService } from '../services/filme.service';
import { UserController } from '../controllers/user.controller';
import { userService } from '../services/user.service';

@Module({
    imports: [TypeOrmModule.forFeature([Filme, Favorite, User])],
    controllers: [FilmesController, UserController],
    providers: [filmesService, userService],
})
export class CoursesModule {}
