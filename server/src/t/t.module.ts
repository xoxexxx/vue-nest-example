import { Module } from '@nestjs/common';
import { TService } from './t.service';
import { TController } from './t.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { T } from './t.entity';

@Module({
  providers: [TService],
  controllers: [TController],
  imports: [TypeOrmModule.forFeature([T])]
})
export class TModule {}