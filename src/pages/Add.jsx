import { useState, useEffect } from 'react';
import SearchCard from '../components/SearchCard';
const API_KEY = '148f7e34';

const Add = () => {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getMovies() {
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
        );
        const data = await res.json();
        if (data.Search) {
          setMovies(data.Search);
        } else {
          setMovies([]);
        }
      } catch (err) {
        setError(err);
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
      {movies.length === 0 && search.length !== 0 && !error && (
        <h2 className='text-4xl italic text-slate-500  text-center max-w-md mx-auto'>
          There is no movie with a title {search}
        </h2>
      )}

      {error && search.length !== 0 && (
        <h2 className='text-4xl italic text-slate-500  text-center max-w-md mx-auto'>
          Something went wrong, please try again.
        </h2>
      )}
    </div>
  );
};

export default Add;
