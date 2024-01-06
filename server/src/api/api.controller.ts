import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller("/api")
export class ApiController {
    constructor(private readonly userService: ApiService) {}
  
    @Post()
    create(@Body() dto: {id: number, email: string, password: string}) {
        return this.userService.create(dto)
    }

    @Get()
    findMany() {
        return this.userService.findMany();
    }
}
