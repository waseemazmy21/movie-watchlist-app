import PropTypes from 'prop-types';

const SearchCard = ({ movie }) => {
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
        <h2 className='text-xl mb-2'>{movie.Title}</h2>
        <p className='text-sm mb-4'>{movie.Year}</p>
        <div className=' grid grid-cols-[1fr_1fr] gap-1 mt-auto'>
          <button className='btn'>Add to WatchList</button>
          <button className='btn'>Add to Watched</button>
        </div>
      </div>
    </div>
  );
};

SearchCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default SearchCard;
