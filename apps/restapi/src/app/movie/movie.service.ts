import { Movie } from '@movies/entity';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InsertResult, Repository } from 'typeorm';

@Injectable()
export class MovieService {

    constructor(
        @Inject('MOVIE_REPOSITORY')
        private movieRepository: Repository<Movie>,
    ) {}

    async getAllMovies(): Promise<Movie[]>{
        return this.movieRepository.find()
    }

    async addMovie(movie: Movie): Promise<InsertResult> {
        return this.movieRepository.insert(movie)
    }

    async findeOneMovie(id:number): Promise<Movie> {
        return this.movieRepository.findOne(id)
    }

    async updateMovie(id:number, movie: Movie): Promise<Movie> {
        const movieToupdate = await this.findeOneMovie(id);
        if (movieToupdate===undefined) {
            throw new NotFoundException()
        }
        await this.movieRepository.update(id, movie);
        return this.findeOneMovie(id);
    }
 
}
