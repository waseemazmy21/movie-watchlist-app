import PropTypes from 'prop-types';
import useGlobalContext from '../context/useGlobalContext';
import ACTIONS from '../context/actions';

const SearchCard = ({ movie }) => {
  const { dispatch, watchlist, watched } = useGlobalContext();

  const isInWatchlist = watchlist.find((m) => m.imdbID === movie.imdbID)
    ? true
    : false;

  const isInWatched = watched.find((m) => m.imdbID === movie.imdbID)
    ? true
    : false;

  return (
    <div className='flex flex-col bg-base-100 shadow-xl rounded-md overflow-hidden'>
      <figure>
        <img
          className='w-full h-60  object-cover'
          src={movie.Poster}
          alt={`${movie.Title} poster`}
        />
      </figure>
      <div className='flex-1 flex flex-col p-4'>
        <h2 className='text-2xl font-bold mb-2'>{movie.Title}</h2>
        <p className='text-sm text-slate-500 mb-4'>{movie.Year}</p>
        <div className=' grid grid-cols-[1fr_1fr] gap-1 mt-auto'>
          <button
            onClick={() => {
              dispatch({
                type: ACTIONS.ADD_MOVIE_TO_WATCHLIST,
                payload: {
                  movie,
                },
              });
            }}
            disabled={isInWatchlist}
            className='btn'
          >
            Add to WatchList
          </button>
          <button
            onClick={() => {
              dispatch({
                type: ACTIONS.ADD_MOVIE_TO_WATCHED,
                payload: {
                  movie,
                },
              });
            }}
            disabled={isInWatched}
            className='btn'
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
};

SearchCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default SearchCard;
