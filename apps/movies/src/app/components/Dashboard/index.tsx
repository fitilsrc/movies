import React, { useContext, useEffect, useState } from 'react';

import IMovie from 'apps/movies/src/interfaces/movie';
import { AppContext } from 'apps/movies/src/store';
import Movie from '../Movie';

const Dashboard = () => {
  const [movies, setmovies] = useState<IMovie []>([]);
  const [sevendays, setSevendays] = useState<IMovie []>([]);

  const { state } = useContext(AppContext);

  useEffect(() => {
    setmovies(state.movies)
  }, [state]);

  useEffect(() => {
    let curDate = new Date()
    let result = movies.filter((item) => {
      let days = (curDate.getTime() - (new Date(item.date)).getTime())/(1000 * 3600 * 24);
      if (days < 7) { return item };
    })
    setSevendays(result)
  }, [movies]);
  

  return (
    <div className='flex flex-col max-w-7xl mx-auto'>
      <div className="pt-8 px-10">
        <h2 className="font-sans font-semibold text-2xl">Statistics</h2>
        <h3 className="font-sans text-opacity-70 text-lg">Movies Count</h3>
        <h4 className="font-sans text-red-600 text-6xl">{ movies.length }</h4>
      </div>
      <div className="pt-8 px-10">
        <h2 className="font-sans font-semibold text-2xl">New movies added over the last seven day</h2>
      </div>
      <div className='flex w-full py-8 flex-wrap gap-4 justify-start items-stretch px-10'>
        {sevendays.map(
          (item)=> {
            return (
            <Movie
              key={item.id}
              id={item.id}
              date={item.date}
              image={item.image}
              name={item.name}
              rating={item.rating} 
            />);
          }
        )}
      </div>
    </div>
  );
};

export default Dashboard;
