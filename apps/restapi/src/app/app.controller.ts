import { Body, Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { IMovie } from './interfaces/movies.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Post()
  create(@Body() createMovieDto: CreateMovieDto): Promise<IMovie> {
    return this.appService.create(createMovieDto);
  }
}
