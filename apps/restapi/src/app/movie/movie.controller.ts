import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { MovieDto } from '../dto/create-movie.dto';
import { MovieService } from './movie.service';

@Controller('movie')
export class MovieController {
    constructor(private readonly movieService: MovieService) {}

    @Get()
    getData() {
        return this.movieService.getData();
    }
    
    @Post()
    createMovie(@Body() movie: MovieDto) {
        console.log('create product', movie);
        this.movieService.createMovie(movie);
    }

    @Put()
    updateMovie(@Body() movie: MovieDto) {
        console.log('update product', movie);
        this.movieService.updateProduct(movie);
    }
}
