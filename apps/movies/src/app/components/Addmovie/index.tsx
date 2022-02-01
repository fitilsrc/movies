import React, { useContext, useRef, useState } from 'react';
import { transliterate as tr, slugify } from 'transliteration';

import useApi from '../../useApi';
import { useInput } from './useForm';
import { AppContext } from 'apps/movies/src/store';

const Addmovie = () => {
  const { state } = useContext(AppContext);
  const { postMovie } = useApi();
  const [ rating, setRating ] = useState('');
  const { value:title, bind:bindTitle, reset:resetTitle } = useInput('');
  const { value:cover, bind:bindCover, reset:resetCover } = useInput('');
  const inputRating = useRef<HTMLInputElement | null>(null)

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log('Movie Title: ', title);
    console.log('Movie Cover: ', cover);
    console.log('Movie rating: ', rating);

    postMovie({
      name: title,
      id: `${state.movies.length+1}-${slugify(title)}`,
      date: (new Date()).toString(),
      image: cover || '/assets/noimage.jpg',
      rating: rating
    })

    resetTitle();
    resetCover();
    setRating('');
  }

  const handleChange = () => {
    let ratingValue =  inputRating.current?.value || "";
    setRating(ratingValue);
  }

  return (
    <div className='flex flex-col max-w-7xl mx-auto'>
      <div className="pt-8 px-10">
        <h2 className="font-sans font-semibold text-2xl">Add New Movie to DB</h2>
        
        <form className='font-sans text-base flex flex-col gap-4 items-start'>
          
          <label className="flex flex-col w-full gap-2">
            <span>Movie title</span>
            <input
              type="text" 
              className="w-full px-3 py-2 border text-gray-500 border-gray-300 outline-none rounded-md focus:border-cyan-500"
              {...bindTitle}
            />
          </label>
          
          <label className="flex flex-col w-full gap-2">
            <span>Movie cover</span>
            <input
              type="text" 
              className="w-full px-3 py-2 border text-gray-500 border-gray-300 outline-none rounded-md focus:border-cyan-500"
              {...bindCover}
            />
          </label>

          <label className="flex flex-col w-full gap-2">
            <span>Movie rating</span>
            <input
              ref={inputRating}
              onChange={handleChange}
              type="number" 
              className="w-full px-3 py-2 border text-gray-500 border-gray-300 outline-none rounded-md focus:border-cyan-500"
            />
          </label>
          <input
            className='bg-cyan-500 text-white font-sans font-semibold px-5 py-1 rounded-md transition-all hover:bg-dark-blue cursor-pointer'
            type="submit"
            value="Send"
            onClick={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
};

export default Addmovie;
