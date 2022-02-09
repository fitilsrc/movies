import React, { useContext, useEffect, useRef, useState } from 'react';
import { transliterate as tr, slugify } from 'transliteration';

import useApi from '../../useApi';
import { useInput } from './useForm';
import { AppContext } from 'apps/movies/src/store';
import { useLocation, useParams } from 'react-router-dom';

import { Button, chakra, Flex, Heading, Input } from '@chakra-ui/react'
import { CustomInput } from '@movies/components';

const Addmovie = () => {
  const { id } = useParams();
  const location = useLocation();

  const [ edit, setEdit ] = useState(id ? true : false);
  const [ movieId, setMovieId ] = useState<string>('');
  const [ movieDate, setMovieDate ] = useState<string>('');
  const [ posted, setPosted ] = useState(false);

  const { state, dispatch } = useContext(AppContext);
  const { postMovie, putMovie, fetchMovies, useAsync } = useApi();
  
  const { execute: executeMovies, status: statusMovies, value: valueMovies, error } = useAsync(fetchMovies, false);
  const { value:title, setValue:setTitle, bind:bindTitle, reset:resetTitle } = useInput('');
  const { value:cover, setValue:setCover, bind:bindCover, reset:resetCover } = useInput('');
  const { value:rating, setValue:setRating, bind:bindRating, reset:resetRating } = useInput('');

  useEffect(()=>{
    console.log('value - ', valueMovies);
    if (statusMovies == "success") {
      dispatch({
        type: 'get_movies',
        payload: valueMovies,
      });
    }
  }, [valueMovies, statusMovies])

  useEffect(()=>{
    if (posted) {
      console.log('posted');
      executeMovies();
      setPosted(false);
    }
  },[posted])
  
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

  const handleSubmit = async(event: any) => {
    event.preventDefault();

    if (edit) {
      let response = await putMovie({
        name: title,
        id: movieId,
        date: movieDate,
        image: cover || '/assets/noimage.jpg',
        rating: rating
      })
      setPosted(true)
    } else {
      let response = await postMovie({
        name: title,
        id: `${state.movies.length+1}-${slugify(title)}`,
        date: (new Date()).toString(),
        image: cover || '/assets/noimage.jpg',
        rating: rating
      })
      setPosted(true)
    }

    resetTitle();
    resetCover();
    resetRating();
  }

  return (
    <Flex
      direction={'column'}
    >
      <chakra.div
        pt={'2rem'}
      >

        <Heading
          as={'h2'}
          fontSize={'2xl'}
          fontWeight={'600'}
        >
          Add New Movie to DB
        </Heading>
        
        <chakra.form
          fontFamily={'heading'}
          display='flex'
          flexDirection={'column'}
          gap={'1rem'}
        >
          
          <CustomInput 
            label='Movie title'
            type="text"
            placeholder='Enter movie title'
            {...bindTitle}
          />
          
          <CustomInput 
            label='Link to Movie cover'
            type="text"
            placeholder='Enter path to Movie cover image'
            { ...bindCover }
          />
          
          <CustomInput 
            label='Movie rating'
            type="number"
            placeholder='Enter movie rating'
            { ...bindRating }
          />
          
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
