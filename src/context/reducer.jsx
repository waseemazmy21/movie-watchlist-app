import ACTIONS from './actions';

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_MOVIE_TO_WATCHLIST:
      return {
        watchlist: [...state.watchlist, action.payload.movie],
        watched: state.watched.filter(
          (movie) => movie.imdbId !== action.payload.movie.imdbId
        ),
      };

    case ACTIONS.REMOVE_MOVIE_FROM_WATCHLIST:
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.imdbId !== action.payload.movie.imdbId
        ),
      };

    case ACTIONS.ADD_MOVIE_TO_WATCHED:
      return {
        watchlist: state.watchlist.filter(
          (movie) => movie.imdbId !== action.payload.movie.imdbId
        ),
        watched: [...state.watched, action.payload.movie],
      };

    case ACTIONS.REMOVE_MOVIE_FROM_WATCHED:
      return {
        ...state,
        watched: state.watched.filter(
          (movie) => movie.imdbId !== action.payload.movie.imdbId
        ),
      };
  }
}

export default reducer;
