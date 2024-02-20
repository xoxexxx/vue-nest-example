import { Body, Controller, Get, Post } from '@nestjs/common';
import { MapService } from './map.service';

@Controller("/map")
export class MapController {
    constructor(private readonly mapService: MapService) {}

    @Post()
    create(@Body() dto: {country: string, length: string}) {
        return this.mapService.create(dto)
    }

    @Get()
    findMany() {
        return this.mapService.findMany();
    }

}