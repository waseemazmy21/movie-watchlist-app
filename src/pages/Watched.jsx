import useGlobalContext from '../context/useGlobalContext';
import CardsContanier from '../components/CardsContanier';
import MovieCard from '../components/MovieCard';

const Watchlist = () => {
  const { watched } = useGlobalContext();

  return (
    <div className='flex flex-col gap-8'>
      <div className='flex justify-between items-center'>
        <h2 className='text-4xl font-bold'>Watch List</h2>
        <span className='px-4 py-2 bg-[#3abff8] text-white rounded-full'>
          {watched.length} Movies
        </span>
      </div>

      {watched.length === 0 && (
        <h3 className='text-4xl italic text-slate-500 pt-12 text-center max-w-md mx-auto'>
          There is no movie in your watched.
        </h3>
      )}

      <CardsContanier>
        {watched.map((movie) => (
          <MovieCard key={movie.imdbId} movie={movie} type="watched" />
        ))}
      </CardsContanier>
    </div>
  );
};

export default Watchlist;
