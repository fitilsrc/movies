import './molecule-movie.module.scss';

import { Link } from 'react-router-dom';

import { Flex, chakra } from '@chakra-ui/react'

import { AtomHeader } from '@movies/atom/header';
import { AtomLabel } from '@movies/atom/label';
import { AtomImage } from '@movies/atom/image';
import { AtomRating } from '@movies/atom/rating';

/* eslint-disable-next-line */
export interface MoleculeMovieProps {
  id: string
  image: string
  name: string
  rating: string
  date: string
}

export function MoleculeMovie(props: MoleculeMovieProps) {
  return (
    <Flex
        rounded='md'
        justify='space-between'
        direction='column'
        overflow='hidden'
      >
        <chakra.div
          outline={'none'}
          position='relative'
          border={'none'}
        >
          <Link
            to={`/edit/${props.id}`}
          >
            <Flex
              w={'2.25rem'}
              h={'2.25rem'}
              position={'absolute'}
              top={'0.5rem'}
              right={'0.5rem'}
              zIndex={'20'}
              rounded={'5555px'}
              bg={'rgba(255,255,255,0.4)'}
              justify={'center'}
              align={'center'}
              _hover={{ bg: 'main' }}
            >
              <Flex
                w={'2rem'}
                h={'2rem'}
                justify={'center'}
                align={'center'}
                border={'2px'}
                rounded={'5555px'}
                borderColor={'white'}
              >
                <AtomImage src="/assets/edit.svg" width='16px' height='16px'/>
              </Flex>
            </Flex>
          </Link>
          <chakra.div
            w={'100%'}
            maxH={'355px'}
            overflow={'hidden'}
            position={'relative'}
          >
            <AtomImage src={ props.image } alt={ props.name } height="100%"/>
          </chakra.div>

          <chakra.div
            position={'absolute'}
            left={'1rem'}
            transform={'translateY(-50%)'}
          >
            <AtomRating rating={props.rating} />
          </chakra.div>
          
        </chakra.div>
        <Flex
          borderBottom='1px'
          borderRight='1px'
          borderLeft='1px'
          borderColor='gray.300'
          roundedBottom={'md'}
          overflow='hidden'
          direction='column'
          justify='space-between'
          grow={'1'}
          px={'1rem'}
          pt={'2rem'}
          pb={'1.25rem'}
        >
          <AtomHeader title={ props.name }/>
          <AtomLabel label={ props.date }/>
        </Flex>
      </Flex>
  );
}

export default MoleculeMovie;
