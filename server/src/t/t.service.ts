import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { T } from './t.entity';

@Injectable()
export class TService {
    constructor(@InjectRepository(T) private readonly tRepository: Repository<T>) {}   

    async create(dto: {log: string, val: string}) {
        const st = this.tRepository.create(dto)
        return await this.tRepository.save(st)
    }

    findMany() {
        return this.tRepository.find()
    }
}