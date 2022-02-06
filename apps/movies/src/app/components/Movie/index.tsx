import React, { useState } from 'react';

import { AtomHeader } from '@movies/atom/header';
import { AtomLabel } from '@movies/atom/label';
import { AtomImage } from '@movies/atom/image';

import IMovie from 'apps/movies/src/interfaces/movie';
import useApi from '../../useApi';
import { Link } from 'react-router-dom';

import { Flex, Box } from '@chakra-ui/react'

const Movie = (data: any) => {
  const [movie, setmovie] = useState<IMovie>(data);
  const { formatDate } = useApi();
  return (
    <Flex
      rounded='md'
      justify='space-between'
      direction='column'
      overflow='hidden'
      className="sm:w-1/3-1 md:w-1/4-1 lg:w-1/5-1"
    > 
      <div className='outline-none border-0 relative'>
        <Link
          className='absolute top-2 right-2 z-50 rounded-full bg-white bg-opacity-50 w-9 h-9 flex justify-center items-center hover:bg-dark-blue'
          to={`/edit/${movie.id}`}
        >
          <div className='w-8 h-8 border-2 rounded-full border-white flex justify-center items-center'>
            <img className='h-4 w-4' src="/assets/edit.svg" alt="" />
          </div>
        </Link>
        <div className="w-full md:h-80 overflow-hidden block relative">
          <AtomImage src={ movie.image } alt={ movie.name } />
        </div>
        <div className='font-sans text-base rounded-full font-semibold bg-black absolute left-3 bottom-0 transform translate-y-1/2 text-white flex justify-center items-center w-9 h-9'>
          <div className='w-8 h-8 border-4 border-green-700 flex justify-center items-center rounded-full'>{movie.rating}</div>
        </div>
      </div>
      <Flex 
        borderBottom='1px'
        borderRight='1px'
        borderLeft='1px'
        borderColor='gray.300'
        rounded='md'
        overflow='hidden'
        direction='column'
        justify='space-between'
        className='px-3 pt-5 pb-3'
      >
        <AtomHeader title={ movie.name }/>
        <AtomLabel label={ formatDate(movie.date) }/>
      </Flex>
    </Flex>
  );
};

export default Movie;
