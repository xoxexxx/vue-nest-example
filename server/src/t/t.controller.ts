import { Body, Controller, Get, Post } from '@nestjs/common';
import { TService } from './t.service';

@Controller("/statistics")
export class TController {
    constructor(private readonly tService: TService) {}

    @Post()
    create(@Body() dto: { log: string, val: string }) {
        return this.tService.create(dto)
    }

    @Get()
    findMany() {
        return this.tService.findMany();
    }

}