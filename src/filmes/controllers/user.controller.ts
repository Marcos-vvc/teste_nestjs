import { Body, Controller, Headers, Get, Post, Query, UnauthorizedException } from '@nestjs/common';
import { CriarUsuarioDto } from '../dto/criar-usuario.dto';
import { LoginUsuarioDto } from '../dto/login-usuario.dto';
import { User } from '../entities/user.entity';
import { userService } from '../services/user.service';
import { ApiBody, ApiQuery, ApiTags, ApiHeader, ApiParam} from '@nestjs/swagger'
import { type } from 'os';


@Controller('user')
export class UserController {
    constructor(private readonly userService: userService) { }

    // endpoint de buscar favoritos

    @Get('/favoritos')
    @ApiTags('Usuarios')
    @ApiHeader({name: 'Authorization', description: 'token'})
    async buscarfavoritos(@Headers('Authorization') token: string) {
        if (!token) {
            throw new UnauthorizedException(`Usuário não autorizado!`)
        }
        return this.userService.buscarFavorito(token)
    }

    // endpoint de buscar por emaill

    @Get('buscarPorEmail')
    @ApiTags('Usuarios')
    @ApiQuery({name: 'email'})
    public async buscar(@Query() query: { email: string }): Promise<User> {
        return this.userService.buscarEmail(query.email)
    }

    // endpoint criar usuario

    @Post('criarUsuario')
    @ApiTags('Usuarios')
    @ApiBody({type: CriarUsuarioDto})
    public async criar(@Body() body: CriarUsuarioDto): Promise<CriarUsuarioDto> {
        return await this.userService.criarUsuario(body)
    }

    // endpoint de fazer login

    @Post('login')
    @ApiTags('Usuarios')
    @ApiBody({type: LoginUsuarioDto})
    public async login(@Body() body: LoginUsuarioDto): Promise<object> {

        const token = await this.userService.autenticarUsuario(body)

        if (token) {
            return {
                acesso_token: token
            }
        }

        throw new UnauthorizedException();

    }

}

