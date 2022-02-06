import './molecule-menu.module.scss';

import { Link } from 'react-router-dom';
import { AtomMenulink } from '@movies/atom/menulink'

/* eslint-disable-next-line */
export interface MoleculeMenuProps {}

export function MoleculeMenu(props: MoleculeMenuProps) {
  return (
    <nav>
      <ul className='flex justify-center items-center gap-4 font-semibold text-white font-sans'>
        <li><AtomMenulink link='/' name='Home'/></li>
        <li><AtomMenulink link='/dashboard' name='Dashbord'/></li>
        <li><AtomMenulink link='/add' name='Add Movie'/></li>        
      </ul>
    </nav>
  );
}

export default MoleculeMenu;
