import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Map } from './map.entity';

@Injectable()
export class MapService {
    constructor(@InjectRepository(Map) private readonly mapRepository: Repository<Map>) {}   

    async create(dto:  { country: string, length: string }) {
        const st = this.mapRepository.create(dto)
        return await this.mapRepository.save(st)
    }

    findMany() {
        return this.mapRepository.find()
    }
}