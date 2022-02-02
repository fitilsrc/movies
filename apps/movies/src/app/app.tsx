// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import { Route, Routes } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { AppContext } from '../store';
import useApi from './useApi';
import Layout from './components/Layout';
import Movies from './components/Movies';
import Dashboard from './components/Dashboard';
import Addmovie from './components/Addmovie';

export function App() {
  const { dispatch } = useContext(AppContext);

  const { fetchMovies } = useApi();

  useEffect(() => {
    const getAllMovies = async() => {
      let result = await fetchMovies()
      dispatch({
        type: 'get_movies',
        payload: result,
      });
    }
    getAllMovies();
    console.log('test11211');
  }, []);
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Movies />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="add" element={<Addmovie />} />
        <Route path="edit/:id" element={<Addmovie />} />
      </Route>
    </Routes>
  );
}

export default App;
