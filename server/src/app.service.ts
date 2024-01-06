import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Set } from './app.entity';

@Injectable()
export class AppService {
  constructor(@InjectRepository(Set) private readonly appRepository: Repository<Set>) {}

  async create(dto: {
    id: number, 
    num: string,
    ip: string, 
    browse: string, 
    passwords: number, 
    wallets: number,  
    build: number,
    date: Date
  }) {
    const set = this.appRepository.create(dto)
    return await this.appRepository.save(set)
  }

  findMany() {
     return this.appRepository.find()
  }

}
