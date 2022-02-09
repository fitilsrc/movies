import './movie-item.module.scss';

import { Link } from 'react-router-dom';
import { Flex, chakra, Heading, Text } from '@chakra-ui/react'
import { IMovie } from '../interfaces';

/* eslint-disable-next-line */

export function MovieItem(props: IMovie) {
  return (
    <>
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
                <img
                  src="/assets/edit.svg"
                  width='16'
                  height='16'
                />
              </Flex>
            </Flex>
          </Link>
          <chakra.div
            w={'100%'}
            maxH={'355px'}
            overflow={'hidden'}
            position={'relative'}
          >
            <img
              src={ props.image }
              alt={ props.name }
              height='100%'
            />
          </chakra.div>

          <chakra.div
            position={'absolute'}
            left={'1rem'}
            transform={'translateY(-50%)'}
          >
            <Flex
              w={'2.25rem'}
              h={'2.25rem'}
              fontFamily={'heading'}
              fontWeight={'600'}
              justify={'center'}
              align={'center'}
              bg={'main'}
              rounded={'5555px'}
              color={'white'}
            >
              <Flex
                w={'1.90rem'}
                h={'1.90rem'}
                justify={'center'}
                align={'center'}
                border={'3px'}
                rounded={'5555px'}
                borderColor={'green.500'}
                borderStyle={'solid'}
              >
                {props.rating}
              </Flex>
            </Flex>
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
          <Heading
            as="h3"
            size='sm'
          >
            {props.name}
          </Heading>
          <Text color={ 'gray.500' }>{ props.date }</Text>
        </Flex>
      </Flex>
    </>
  );
}

export default MovieItem;
