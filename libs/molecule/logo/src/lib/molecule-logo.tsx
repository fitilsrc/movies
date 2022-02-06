import './molecule-logo.module.scss';
import { Link } from 'react-router-dom';

import { AtomImage } from '@movies/atom/image';

/* eslint-disable-next-line */
export interface MoleculeLogoProps {}

export function MoleculeLogo(props: MoleculeLogoProps) {
  return (
    <Link to='/'>
      <AtomImage width="154px" height="20px" src="/assets/logo.svg" alt="The Best Movie Site"/>
    </Link>
  );
}

export default MoleculeLogo;
