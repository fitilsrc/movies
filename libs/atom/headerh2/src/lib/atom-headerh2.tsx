import './atom-headerh2.module.scss';

import { chakra } from '@chakra-ui/react';

/* eslint-disable-next-line */
export interface AtomHeaderh2Props {
  text: string
}

export function AtomHeaderH2(props: AtomHeaderh2Props) {
  return (
    <>
      <chakra.h2
        fontFamily={'heading'}
        fontSize={'2xl'}
        fontWeight={'600'}
      >
        {props.text}
      </chakra.h2>
    </>
  );
}

export default AtomHeaderH2;
