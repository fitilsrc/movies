import React, { useState } from 'react';

import IMovie from 'apps/movies/src/interfaces/movie';
import useApi from '../../useApi';


const Movie = (data: any) => {
  const [movie, setmovie] = useState<IMovie>(data);
  const { formatDate } = useApi();
  return (
    <div className="w-full sm:w-1/3-1 md:w-1/4-1 lg:w-1/5-1 flex flex-col overflow-hidden rounded-lg select-none"> 
      <div className='outline-none border-0 relative'>
        <div className="w-full h-80 overflow-hidden block relative">
          <img className='object-cover w-full h-full' src={movie.image} alt={movie.name} />
        </div>
        <div className='font-sans text-base rounded-full font-semibold bg-black absolute left-3 bottom-0 transform translate-y-1/2 text-white flex justify-center items-center w-9 h-9'>
          <div className='w-8 h-8 border-4 border-green-700 flex justify-center items-center rounded-full'>{movie.rating}</div>
        </div>
      </div>
      <div className='overflow-hidden rounded-b-lg border flex-grow flex flex-col justify-between px-3 pt-5 pb-3'>
        <div className='font-bold font-sans text-base'>
          { movie.name }
        </div>
        <div className='text-gray-400'>
          { formatDate(movie.date) }
        </div>
      </div>
    </div>
  );
};

export default Movie;
