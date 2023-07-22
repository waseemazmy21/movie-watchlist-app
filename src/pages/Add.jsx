import { useState, useEffect } from 'react';
import SearchCard from '../components/SearchCard';
const API_KEY = '148f7e34';

const Add = () => {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
      );
      const data = await res.json();
      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    }
    getMovies();
  }, [search]);

  function handleSearchChange(e) {
    setSearch(e.target.value);
  }

  return (
    <div className='flex flex-col gap-8'>
      <input
        type='text'
        placeholder='Type a movie name'
        className='input input-bordered input-lg w-full'
        value={search}
        onChange={handleSearchChange}
      />
      <div
        className='max-w-xs sm:max-w-full mx-auto'
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {movies.length !== 0 &&
          movies.map((movie) => {
            return <SearchCard movie={movie} key={movie.imdbID} />;
          })}
      </div>
      {movies.length === 0 && search.length !== 0 && (
        <h2 className='text-3xl text-center'>
          There is no movie with a title {search}
        </h2>
      )}
    </div>
  );
};

export default Add;
