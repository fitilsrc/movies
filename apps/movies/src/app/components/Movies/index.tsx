import React, { useContext, useEffect, useState } from 'react';

import Movie from '../Movie';
import Pagination from '../Pagination';
import IMovie from 'apps/movies/src/interfaces/movie';
import { AppContext } from 'apps/movies/src/store';

const Movies = () => {
  const [movies, setmovies] = useState<IMovie []>([]);
  const [filtered, setFiltered] = useState<IMovie []>([]);
  const [page, setPage] = useState(1);

  const { state } = useContext(AppContext);

  const filterMovies = (data: IMovie[]) => {
    return data.filter((item, index)=>{
      // console.log(index);
      if (index <= page*5-1 && index >= page*5-5) {
        return item
      }
    })
  }

  useEffect(() => {
    setFiltered(filterMovies(movies))
  }, [page, movies]);
  

  useEffect(() => {
    setmovies(state.movies)
  }, [state.movies]);

  useEffect(() => {
    setPage(state.page)
  }, [state.page]);
  

  return (
    <div className='flex flex-col max-w-7xl mx-auto'>
      <div className='flex w-full py-8 flex-wrap gap-4 justify-start items-stretch px-10'>
        {filtered.map(
          (item)=> {
            return (
            <Movie
              key={item.id}
              id={item.id}
              date={item.date}
              image={item.image}
              name={item.name}
              rating={item.rating} 
            />);
          }
        )}

        {/* {movies.filter(
          (item, index)=> {
            if (index <= page*5-1 && index >= page*5-5) {
              return item
            }
          }
        )} */}
      </div>
      <div className='pt-8 pb-16 flex justify-center items-center'>
        <Pagination />
      </div>

    </div>
  );
};

export default Movies;
