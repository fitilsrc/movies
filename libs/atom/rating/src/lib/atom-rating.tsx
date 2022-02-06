import './atom-rating.module.scss';

import { Flex, chakra } from '@chakra-ui/react'

/* eslint-disable-next-line */
export interface AtomRatingProps {
  rating: string
}

export function AtomRating(props: AtomRatingProps) {
  return (
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
  );
}

export default AtomRating;
