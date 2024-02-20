import { Module } from '@nestjs/common';
import { MapService } from './map.service';
import { MapController } from './map.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Map } from './map.entity';

@Module({
  providers: [MapService],
  controllers: [MapController],
  imports: [TypeOrmModule.forFeature([Map])]
})
export class MapModule {}