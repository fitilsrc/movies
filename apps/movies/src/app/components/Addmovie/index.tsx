import React, { useContext, useEffect, useRef, useState } from 'react';
import { transliterate as tr, slugify } from 'transliteration';

import useApi from '../../useApi';
import { useInput } from './useForm';
import { AppContext } from 'apps/movies/src/store';
import { useLocation, useParams } from 'react-router-dom';

const Addmovie = () => {
  const { id } = useParams();
  const location = useLocation();

  const [ edit, setEdit ] = useState(id ? true : false);
  const [ movieId, setMovieId ] = useState<string>('');
  const [ movieDate, setMovieDate ] = useState<string>('');

  const { state, dispatch } = useContext(AppContext);
  const { postMovie, putMovie, fetchMovies } = useApi();
  
  const { value:title, setValue:setTitle, bind:bindTitle, reset:resetTitle } = useInput('');
  const { value:cover, setValue:setCover, bind:bindCover, reset:resetCover } = useInput('');
  const { value:rating, setValue:setRating, bind:bindRating, reset:resetRating } = useInput('');

  useEffect(() => {
    // console.log(location);
    if (location.pathname == '/add') {
      setEdit(false)
    }
  }, [location]);
  

  useEffect(() => {
    console.log(edit);
    if (edit) {
      state.movies.find(
        item=> {
          if(item.id==id) {
            setTitle(item.name)
            setCover(item.image)
            setRating(item.rating)
            setMovieId(item.id)
            setMovieDate(item.date)
          }
        }
      )
    } else {
      resetTitle();
      resetRating();
      setCover('/assets/noimage.jpg')
    }

  }, [edit]);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (edit) {
      putMovie({
        name: title,
        id: movieId,
        date: movieDate,
        image: cover || '/assets/noimage.jpg',
        rating: rating
      })
    } else {
      postMovie({
        name: title,
        id: `${state.movies.length+1}-${slugify(title)}`,
        date: (new Date()).toString(),
        image: cover || '/assets/noimage.jpg',
        rating: rating
      })
    }

    resetTitle();
    resetCover();
    resetRating();
    const getAllMovies = async() => {
      let result = await fetchMovies()
      dispatch({
        type: 'get_movies',
        payload: result,
      });
    }
    getAllMovies()
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
            <span>Link to Movie cover</span>
            <input
              type="text" 
              className="w-full px-3 py-2 border text-gray-500 border-gray-300 outline-none rounded-md focus:border-cyan-500"
              {...bindCover}
            />
          </label>

          <label className="flex flex-col w-full gap-2">
            <span>Movie rating</span>
            <input
              {...bindRating}
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
