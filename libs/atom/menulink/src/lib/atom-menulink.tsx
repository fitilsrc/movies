import './atom-menulink.module.scss';

import { Link } from 'react-router-dom';
import { chakra } from '@chakra-ui/react';


/* eslint-disable-next-line */
export interface AtomMenulinkProps {
  name: string;
  link: string;
}

export function AtomMenulink(props: AtomMenulinkProps) {
  return (
    <Link className='p-2' to={ props.link }>
      <chakra.span
        color={'white'}
        p={'0.5rem'}
      >{props.name}</chakra.span>
    </Link>
  );
}

export default AtomMenulink;
