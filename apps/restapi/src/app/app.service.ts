import { Injectable } from '@nestjs/common';
import { IMovie } from './interfaces/movies.interface';
import { Movie } from './movie.model';
import { movies } from './movies.data';

@Injectable()
export class AppService {
  getData(): { movies: IMovie[] } {
    return { movies };
  }

  async create(movie: IMovie): Promise<IMovie> {
    const newMovie = new Movie('1-peacemaker','2022-01-28T14:26:36.499Z','/assets/cover/peacemaker.jpg','Миротворець',79);
    return
    // return await movies.push(newMovie);
  }
}
