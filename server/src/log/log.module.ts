import { Module } from '@nestjs/common';
import { LogService } from './log.service';
import { LogController } from './log.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Log } from './log.entity';

@Module({
  providers: [LogService],
  controllers: [LogController],
  imports: [TypeOrmModule.forFeature([Log])]
})

export class LogModule {}