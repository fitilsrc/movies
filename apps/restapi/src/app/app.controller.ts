import { Body, Controller, Get, Post, Put } from '@nestjs/common';

import { AppService } from './app.service';
import { MovieDto } from './dto/create-movie.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }
  
  @Post()
  createMovie(@Body() movie: MovieDto) {
    console.log('create product', movie);
    this.appService.createMovie(movie);
  }

  @Put()
  updateMovie(@Body() movie: MovieDto) {
    console.log('update product', movie);
    // this.productsService.updateProduct(product);
  }
}
