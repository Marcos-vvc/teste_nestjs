import { Module } from '@nestjs/common';
import { AppController } from '../../app.controller';
import { AppService } from '../services/app.service';
import { FilmesModule } from './filme.module';
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [FilmesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'docker',
      database: 'postgres',
      autoLoadEntities: true,
      entities: [],
      synchronize: true,
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
