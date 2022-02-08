import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { MovieDto } from '../dto/create-movie.dto';
import { MovieService } from './movie.service';

@Controller('movie')
export class MovieController {
    constructor(private readonly movieService: MovieService) {}

    @Get()
    getData() {
        return this.movieService.getAllMovies();
    }
    
    @Post()
    createMovie(@Body() movie: MovieDto) {
        this.movieService.addMovie(movie);
    }

    @Put()
    updateMovie(@Body() movie: MovieDto) {
        this.movieService.updateMovie(movie.id, movie)
    }
}
