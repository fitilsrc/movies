import './atom-menulink.module.scss';

import { Link } from 'react-router-dom';

/* eslint-disable-next-line */
export interface AtomMenulinkProps {
  name: string;
  link: string;
}

export function AtomMenulink(props: AtomMenulinkProps) {
  return (
    <Link className='p-2' to={ props.link }>{props.name}</Link>
  );
}

export default AtomMenulink;
