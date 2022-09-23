import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CriarFilmeDto } from '../dto/criar-fillme.dto';
import { Filme } from '../entities/filme.entity';

@Injectable()
export class filmesService {
    constructor(
        @InjectRepository(Filme)
        private readonly filmesRepository: Repository<Filme>
    ){}

    findAll() {
        return this.filmesRepository.find();
    }  

    criarFilme(criarFilmeDto: CriarFilmeDto){
        const filme = this.filmesRepository.create(criarFilmeDto)
        return this.filmesRepository.save(filme)
    }
}
