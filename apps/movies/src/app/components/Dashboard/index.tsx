import React, { useContext, useEffect, useState } from 'react';

import { AppContext } from 'apps/movies/src/store';

import { chakra, Flex, Heading } from '@chakra-ui/react';
import useApi from '../../useApi';
import { IMovie, MovieList } from '@movies/components';

const Dashboard = () => {
  const [movies, setmovies] = useState<IMovie []>([]);
  const [sevendays, setSevendays] = useState<IMovie []>([]);

  const { state } = useContext(AppContext);

  const { formatDate } = useApi();

  // Set movies variable when global movies state changed

  useEffect(() => {
    setmovies(state.movies)
  }, [state.movies]);

  // Filter movies added in the last 7 days and format the date

  useEffect(() => {
    let curDate = new Date()

    let result = movies.filter((item) => {
      let days = (curDate.getTime() - (new Date(item.date)).getTime())/(1000 * 3600 * 24);
      if (days < 7) { return item };
    }).map(item => {return { ...item, 'date': formatDate(item.date) }})
    
    setSevendays(result)
  }, [movies]);
  

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
          Statistics
        </Heading>
        <Heading
          as={'h3'}
          fontSize={'lg'}
          fontWeight={'300'}
          color={'gray.500'}
        >
            Movies Count
        </Heading>
        <chakra.div
          fontFamily={'heading'}
          fontSize={'6xl'}
          color={'red.600'}
        >
          { movies.length }
        </chakra.div>
      </chakra.div>
      
      <chakra.div
        pt={'2rem'}
      >
        <Heading
          as={'h2'}
          fontSize={'2xl'}
          fontWeight={'600'}
        >
          New movies added over the last seven day
        </Heading>
      </chakra.div>
      <chakra.div
        py={'2rem'}
      >
        <MovieList
          movies={ sevendays }
        />
      </chakra.div>
    </Flex>
  );
};

export default Dashboard;
