import { Body, Controller, Delete, Get, Param, Patch, Post, Res } from '@nestjs/common';
import { userService } from '../services/user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: userService){}

    @Get()
    findAll(){
        return this.userService.findAll();
    }

  
}