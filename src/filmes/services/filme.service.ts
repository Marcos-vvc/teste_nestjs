import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Authenticator } from '../auth/auth';
import { CriarFilmeDto } from '../dto/criar-fillme.dto';
import { EditarFilmeDto } from '../dto/editar-filme.dto';
import { Favorite } from '../entities/favorites.entity';
import { Filme } from '../entities/filme.entity';
import { Pagination, IPaginationOptions, paginate } from 'nestjs-typeorm-paginate'


@Injectable()
export class filmesService {
    constructor(
        @InjectRepository(Filme)
        private readonly filmesRepository: Repository<Filme>,
        private readonly autenticador: Authenticator,
        @InjectRepository(Favorite)
        private readonly favoritoRepository: Repository<Favorite>
    ) { }

    // service paginação

    async paginate(options: IPaginationOptions): Promise<Pagination<Filme>> {
        const queryBuilder = this.filmesRepository.createQueryBuilder('c');
        queryBuilder.select(['c.titulo', 'c.capa', 'c.cover', 'c.anoDeLancamento', 'c.generos', 'c.mediaIMDB'])      

        return paginate<Filme>(queryBuilder, options);
    }

    // service criar filme

    criarFilme(criarFilmeDto: CriarFilmeDto, token: string) {
        const verificarToken = this.autenticador.getData(token)

        if (!verificarToken) {
            throw new NotFoundException('Token não encontrado')
        }
        const filme = this.filmesRepository.create(criarFilmeDto)

        return this.filmesRepository.save(filme)
    }

    // service favoritar filme

    favoritarFilme(filme_id: string, token: string) {

        if (!filme_id) {
            throw new NotFoundException(`Filme ${filme_id} não encontrado `)
        }
        const verificarToken = this.autenticador.getData(token)

        if (!verificarToken) {
            throw new NotFoundException('Token não encontrado')
        }

        const favorito = this.favoritoRepository.create({ filme: { id: filme_id }, user: { id: verificarToken.id } })

        return this.favoritoRepository.save(favorito)
    }

    // service editar filme

    async editarFilme(id: string, editarFilmeDto: EditarFilmeDto, token: string) {
        const filmeEditado = await this.filmesRepository.findOne({
            where: {
                id
            }
        })
        const verificarToken = this.autenticador.getData(token)

        if (!verificarToken) {
            throw new NotFoundException('Token não encontrado')
        }

        if (!filmeEditado) {
            throw new NotFoundException(`Filme ${id} não encontrado `)
        }

        await this.filmesRepository.update(id, editarFilmeDto)

        return this.filmesRepository.save(filmeEditado)
    }

    // service deletar filme

    async deletarFilme(id: string, token: string) {
        const filme = await this.filmesRepository.findOne({ where: { id } })

        if (!filme) {
            throw new NotFoundException(`Filme ${id} não encontrado `)
        }

        const verificarToken = this.autenticador.getData(token)

        if (!verificarToken) {
            throw new NotFoundException('Token não encontrado')
        }

        return await this.filmesRepository.remove(filme)


    }



}
