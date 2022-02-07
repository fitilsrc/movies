import './logo.module.scss';

import { Link } from 'react-router-dom';

/* eslint-disable-next-line */
export interface LogoProps {}

export function Logo(props: LogoProps) {
  return (
    <>
      <Link to='/'>
        <img width="154" height="20" src="/assets/logo.svg" alt="The Best Movie Site"/>
      </Link>
    </>
  );
}

export default Logo;
