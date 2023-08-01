import PropTypes from 'prop-types';
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineClose,
} from 'react-icons/ai';
import useGlobalContext from '../context/useGlobalContext';
import ACTIONS from '../context/actions';

const MovieCard = ({ movie, type }) => {
  const { dispatch } = useGlobalContext();

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
        {type === 'watchlist' && (
          <div className='flex justify-center items-center gap-2 mt-auto'>
            <button
              onClick={() => {
                dispatch({
                  type: ACTIONS.ADD_MOVIE_TO_WATCHED,
                  payload: {
                    movie,
                  },
                });
              }}
              className='btn '
            >
              <AiOutlineEye size={24} />
            </button>
            <button
              onClick={() => {
                dispatch({
                  type: ACTIONS.REMOVE_MOVIE_FROM_WATCHLIST,
                  payload: {
                    movie,
                  },
                });
              }}
              className='btn'
            >
              <AiOutlineClose size={24} />
            </button>
          </div>
        )}

        {type === 'watched' && (
          <div className='flex justify-center items-center gap-2 mt-auto'>
            <button
              onClick={() => {
                dispatch({
                  type: ACTIONS.ADD_MOVIE_TO_WATCHLIST,
                  payload: {
                    movie,
                  },
                });
              }}
              className='btn '
            >
              <AiOutlineEyeInvisible size={24} />
            </button>
            <button
              onClick={() => {
                dispatch({
                  type: ACTIONS.REMOVE_MOVIE_FROM_WATCHED,
                  payload: {
                    movie,
                  },
                });
              }}
              className='btn'
            >
              <AiOutlineClose size={24} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
};

export default MovieCard;
