import { Body, Controller, Delete, Get, Param, Patch, Post, Res } from '@nestjs/common';
import { CriarFilmeDto } from '../dto/criar-fillme.dto';
import { filmesService } from '../services/filme.service';
import * as yup from 'yup';

@Controller('filmes')
export class FilmesController {
    userService: any;
    constructor(private readonly filmesService: filmesService) { }

    @Get()
    findAll() {
        return this.filmesService.findAll();
    }

    @Post()
    public async criar(@Body() body: CriarFilmeDto,): Promise<CriarFilmeDto> {
        return this.userService.create(body)
   
    }
}

