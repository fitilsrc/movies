import { useEffect } from 'react';
import { IMovie } from '../interfaces/imovie';
import './movie-list.module.scss';

import { SimpleGrid } from '@chakra-ui/react';
import MovieItem from '../movie-item/movie-item';

/* eslint-disable-next-line */
export interface MovieListProps {
  movies: IMovie[]
}

export function MovieList(props: MovieListProps) {
  
  return (
    <>
      <SimpleGrid
          columns={{sm:3, md:4, lg:5}}
          gap='1rem'
          className='flex w-full py-8 flex-wrap justify-start items-stretch'
        >
          {props.movies.map(
            (item, index)=> {
              return (
                <MovieItem
                  key={index}
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  rating={item.rating}
                  date={item.date}
                />
              );
            }
          )}
        </SimpleGrid>
    </>
  );
}

export default MovieList;
