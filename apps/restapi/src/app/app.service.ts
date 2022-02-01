import { Injectable } from '@nestjs/common';
import { IMovie } from './interfaces/movies.interface';
// import { Movie } from './movie.model';
import { movies } from './movies.data';

@Injectable()
export class AppService {

  movieslist = movies

  getData() {
    return this.movieslist;
  }

  createMovie(movie) {
    this.movieslist = [...this.movieslist, {...movie}];
  }

  updateProduct(movie) {
    this.movieslist = this.movieslist.map(
      item => {
        if(item.id == movie.id) {
          return {...movie}
        }
        return item
      }
    )
  }
}
