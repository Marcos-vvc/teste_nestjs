import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CriarUsuarioDto } from '../dto/criar-usuario.dto';
import { User } from '../entities/user.entity';
import * as bcrypt from 'bcrypt';
import { Authenticator } from '../auth/auth';
import { LoginUsuarioDto } from '../dto/login-usuario.dto';
import { Favorite } from '../entities/favorites.entity';

@Injectable()
export class userService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        private readonly autenticador: Authenticator,
        @InjectRepository(Favorite)
        private readonly favoritoRepository: Repository<Favorite>,
    ) { }

        // service buscar favorito

    async buscarFavorito(token: string) {
        const verificarToken = this.autenticador.getData(token)

        const users2 = await this.favoritoRepository.find({
            where: { user: { id: verificarToken.id } },
            relations: ['user', 'filme'],
            select: ['filme', 'user']

        })
        return users2
    }

    // service buscar por email

    buscarEmail(email: string) {
        return this.userRepository.findOne({
            where: { email }
        })
    }

    // service criar usuario

    async criarUsuario(criarUsuarioDto: CriarUsuarioDto) {

        const senhaHash = await bcrypt.hash(criarUsuarioDto.senha, 10)

        const data = {
            ...criarUsuarioDto,
            senha: senhaHash
        }
        const criadoUsuario = this.userRepository.create(data)
        this.userRepository.save(criadoUsuario)

        return {
            ...criadoUsuario,
            senha: undefined,
        }
    }

    // service autenticar usuario para fazer login

    async autenticarUsuario(loginUsuarioDto: LoginUsuarioDto) {
        const usuario = await this.userRepository.findOne({ where: { email: loginUsuarioDto.email } })

        if (usuario) {
            const senhaValida = await bcrypt.compare(loginUsuarioDto.senha, usuario.senha)
            if (senhaValida) {

                return this.autenticador.generateToken({
                    id: usuario.id,
                    isAdmin: usuario.isAdmin
                })

            }
        }
        return null;
    }

}


