import React, { useContext, useEffect, useState } from 'react';

import { chakra, Flex } from '@chakra-ui/react';

import { AppContext } from 'apps/movies/src/store';
import Pagination from '../Pagination';
import useApi from '../../useApi';

import { MovieList, IMovie } from '@movies/components';

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

  // Set current page when component mount

  useEffect(() => {
    dispatch({
      type: 'set_page',
      payload: 1
    })
  }, []);

  // this hook will work when list of movies change or page changed 
  // filter movies by current page and format date

  useEffect(() => {
    let result = filterMovies(movies).map(item => {return { ...item, 'date': formatDate(item.date) }})
    setFiltered(result)
  }, [page, movies]);
  
  // Set movies variable when global movies state changed

  useEffect(() => {
    setmovies(state.movies)
  }, [state.movies]);

  // Set page variable when global page state changed

  useEffect(() => {
    setPage(state.page)
  }, [state.page]);
  

  return (
    <>
      <Flex
        direction='column'
      >
        <chakra.div
          py={'2rem'}
        >
          <MovieList
            movies={ filtered }
          />
        </chakra.div>
        <Flex
          pt='1rem'
          pb='2rem'
          justify='center'
          alignItems='center'
        >
          <Pagination />
        </Flex>
      </Flex>
    </>
  );
};

export default Movies;
