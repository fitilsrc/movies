import React, { useContext, useEffect, useState } from 'react';

import { Flex, SimpleGrid } from '@chakra-ui/react';

import IMovie from 'apps/movies/src/interfaces/movie';
import { AppContext } from 'apps/movies/src/store';
import { MoleculeMovie } from '@movies/molecule/movie'
import Pagination from '../Pagination';
import useApi from '../../useApi';

const Movies = () => {
  const [movies, setmovies] = useState<IMovie []>([]);
  const [filtered, setFiltered] = useState<IMovie []>([]);
  const [page, setPage] = useState(1);
  
  const { state, dispatch } = useContext(AppContext);

  const { formatDate } = useApi();

  const filterMovies = (data: IMovie[]) => {
    return data.filter((item, index)=>{
      if (index <= page*5-1 && index >= page*5-5) {
        return item
      }
    })
  }

  useEffect(() => {
    dispatch({
      type: 'set_page',
      payload: 1
    })
  }, []);

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
    <Flex
      direction='column'
    >
      <SimpleGrid 
        columns={{sm:3, md:4, lg:5}}
        gap='1rem'
        className='flex w-full py-8 flex-wrap justify-start items-stretch'
      >
        {filtered.map(
          (item, index)=> {
            return (
              <MoleculeMovie
                key={index}
                id={item.id}
                image={item.image}
                name={item.name}
                rating={item.rating}
                date={formatDate(item.date)}/>
            );
          }
        )}
      </SimpleGrid>
      <Flex 
        pt='1rem'
        pb='2rem'
        justify='center'
        alignItems='center'
      >
        <Pagination />
      </Flex>

    </Flex>
  );
};

export default Movies;
