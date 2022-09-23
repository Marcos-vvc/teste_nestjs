import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CriarFilmeDto } from '../dto/criar-fillme.dto';
import { User } from '../entities/user.entity';

@Injectable()
export class userService {
    create(body: CriarFilmeDto): CriarFilmeDto | PromiseLike<CriarFilmeDto> {
        throw new Error('Method not implemented.');
    }
    save(body: CriarFilmeDto): import("../dto/criar-fillme.dto").CriarFilmeDto | PromiseLike<import("../dto/criar-fillme.dto").CriarFilmeDto> {
        throw new Error('Method not implemented.');
    }
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ){}

    findAll() {
        return this.userRepository.find();
    }  

}