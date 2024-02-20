import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './api.entity';

@Module({
  providers: [ApiService],
  controllers: [ApiController],
  imports: [TypeOrmModule.forFeature([User])]
})

export class ApiModule {}