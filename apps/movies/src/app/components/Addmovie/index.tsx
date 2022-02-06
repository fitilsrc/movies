import React, { useContext, useEffect, useRef, useState } from 'react';
import { transliterate as tr, slugify } from 'transliteration';

import useApi from '../../useApi';
import { useInput } from './useForm';
import { AppContext } from 'apps/movies/src/store';
import { useLocation, useParams } from 'react-router-dom';

import { AtomHeaderH2 } from '@movies/atom/headerh2'

import { Button, chakra, Flex, Input } from '@chakra-ui/react'

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
    if (location.pathname == '/add') {
      setEdit(false)
    }
  }, [location]);
  

  useEffect(() => {
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
    <Flex
      direction={'column'}
    >
      <chakra.div
        pt={'2rem'}
      >
        <AtomHeaderH2 text='Add New Movie to DB' />
        
        <chakra.form
          fontFamily={'heading'}
          display='flex'
          flexDirection={'column'}
          gap={'1rem'}
        >
          
          <chakra.label
            display={'flex'}
            flexDirection={'column'}
            w={'100%'}
            gap={'1rem'}
          >
            <span>Movie title</span>
            <Input
              placeholder='Enter movie title'
              {...bindTitle}
            />
          </chakra.label>
          
          <chakra.label
            display={'flex'}
            flexDirection={'column'}
            w={'100%'}
            gap={'1rem'}
          >
            <span>Link to Movie cover</span>
            <Input
              placeholder='Enter path to Movie cover image'
              {...bindCover}
            />
          </chakra.label>

          <chakra.label
            display={'flex'}
            flexDirection={'column'}
            w={'100%'}
            gap={'1rem'}
          >
            <span>Movie rating</span>
            <Input
              type="number"
              placeholder='Enter movie rating'
              {...bindRating}
            />
          </chakra.label>
          
          <Button
            w={'auto'}
            colorScheme='teal'
            onClick={handleSubmit}
          >
            Send
          </Button>
          
        </chakra.form>
      </chakra.div>
    </Flex>
  );
};

export default Addmovie;
