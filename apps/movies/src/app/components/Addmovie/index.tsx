import React from 'react';

const Addmovie = () => {
  return (
    <div className='flex flex-col max-w-7xl mx-auto'>
      <div className="pt-8 px-10">
        <h2 className="font-sans font-semibold text-2xl">Add New Movie to DB</h2>
        <h3 className="font-sans text-opacity-70 text-lg">Movies Count</h3>
        <form>
          <label>
            <span>Movie title</span>
            <input
              type="text" 
              name="title"
            />
          </label>
        </form>
      </div>
    </div>
  );
};

export default Addmovie;
