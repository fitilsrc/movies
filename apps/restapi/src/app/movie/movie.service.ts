import { Injectable } from '@nestjs/common';
import { movies } from '../movies.data';

@Injectable()
export class MovieService {

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
