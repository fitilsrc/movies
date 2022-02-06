import React, { useContext, useEffect, useState } from 'react';

import IMovie from 'apps/movies/src/interfaces/movie';
import { AppContext } from 'apps/movies/src/store';

import { MoleculeMovie } from '@movies/molecule/movie';
import { AtomHeaderH2 } from '@movies/atom/headerh2';
import { chakra, Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import useApi from '../../useApi';

const Dashboard = () => {
  const [movies, setmovies] = useState<IMovie []>([]);
  const [sevendays, setSevendays] = useState<IMovie []>([]);

  const { state } = useContext(AppContext);

  const { formatDate } = useApi();

  useEffect(() => {
    setmovies(state.movies)
  }, [state]);

  useEffect(() => {
    let curDate = new Date()
    let result = movies.filter((item) => {
      let days = (curDate.getTime() - (new Date(item.date)).getTime())/(1000 * 3600 * 24);
      if (days < 7) { return item };
    })
    setSevendays(result)
  }, [movies]);
  

  return (
    <Flex
      direction={'column'}
    >
      <chakra.div
        pt={'2rem'}
      >
        <AtomHeaderH2 text='Statistics' />
        <Heading
          as={'h3'}
          fontFamily={'heading'}
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
        <AtomHeaderH2 text='New movies added over the last seven day' />
      </chakra.div>
      <SimpleGrid 
        columns={{sm:3, md:4, lg:5}}
        gap='1rem'
        py={'2rem'}
      >
        {sevendays.map(
          (item, index)=> {
            return (
            <MoleculeMovie
              key={index}
              id={item.id}
              date={formatDate(item.date)}
              image={item.image}
              name={item.name}
              rating={item.rating} 
            />);
          }
        )}
      </SimpleGrid>
    </Flex>
  );
};

export default Dashboard;
