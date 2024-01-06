import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './api.entity';

@Injectable()
export class ApiService {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

   async create(dto: {id: number, email: string, password: string}) {
        const user = this.userRepository.create(dto)
        return await this.userRepository.save(user)
    }

    findMany() {
        return this.userRepository.find()
    }
}
