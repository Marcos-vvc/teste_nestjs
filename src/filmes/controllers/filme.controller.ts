import { Body, Controller, DefaultValuePipe, Delete, Get, Headers, NotFoundException, Param, ParseIntPipe, Post, Put, Query, UnauthorizedException } from '@nestjs/common';
import { CriarFilmeDto } from '../dto/criar-fillme.dto';
import { EditarFilmeDto } from '../dto/editar-filme.dto';
import { Filme } from '../entities/filme.entity';
import { filmesService } from '../services/filme.service';
import { Pagination } from 'nestjs-typeorm-paginate';
import { ApiBody, ApiQuery, ApiTags, ApiHeader, ApiParam } from '@nestjs/swagger'


@Controller('filmes')
export class FilmesController {
    constructor(private readonly filmesService: filmesService) { }

    // endpoint de paginação >>>

    @Get('paginacao')
    @ApiTags('Filmes')
    @ApiQuery({ name: 'page', required: false, type: Number })
    @ApiQuery({ name: 'limit', required: false, type: Number })
    async index(@Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10
    ): Promise<Pagination<Filme>> {
        limit = limit > 10 ? 10 : limit;
        return this.filmesService.paginate({
            page, limit
        })
    }

    // endpoint de criar filmes

    @Post('criar')
    @ApiTags('Filmes')
    @ApiBody({ type: CriarFilmeDto })
    @ApiHeader({ name: 'Authorization' })
    public async criar(@Body() body: CriarFilmeDto, @Headers('Authorization') token: string): Promise<CriarFilmeDto> {

        if (!token) {
            throw new UnauthorizedException(`Usuário não autorizado!`)
        }
        return this.filmesService.criarFilme(body, token)

    }

    // endpoint de favoritar filme

    @Post('favoritar/:filme_id')
    @ApiTags('Filmes')
    @ApiParam({ name: 'filme_id' })
    @ApiHeader({ name: 'Authorization' })
    favorito(@Param('filme_id') filme_id: string, @Headers('Authorization') token: string) {

        if (!token) {
            throw new UnauthorizedException(`Usuário não autorizado!`)
        }
        return this.filmesService.favoritarFilme(filme_id, token)
    }

    // endpoint de editar filme

    @Put('editar/:id')
    @ApiTags('Filmes')
    @ApiParam({ name: 'id' })
    @ApiBody({ type: EditarFilmeDto })
    @ApiHeader({ name: 'Authorization' })
    editar(@Param('id') id: string, @Body() body: EditarFilmeDto, @Headers('Authorization') token: string): Promise<EditarFilmeDto> {

        if (!token) {
            throw new UnauthorizedException(`Usuário não autorizado!`)
        }
        return this.filmesService.editarFilme(id, body, token)
    }

    // endpoint de deletar filme

    @Delete(':id')
    @ApiTags('Filmes')
    @ApiParam({ name: 'id' })
    @ApiHeader({ name: 'Authorization' })
    deletar(@Param('id') id: string, @Headers('Authorization') token: string): Promise<Filme> {

        if (!token) {
            throw new UnauthorizedException(`Usuário não autorizado!`)
        }

        return this.filmesService.deletarFilme(id, token)
    }

}



