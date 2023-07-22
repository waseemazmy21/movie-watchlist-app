import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import reducer from './reducer';

export const GlobalContext = React.createContext();

const initialState = {
  watchlist: localStorage.getItem('watchlist')
    ? JSON.parse(localStorage.getItem('watchlist'))
    : [],
  watched: localStorage.getItem('watched')
    ? JSON.parse(localStorage.getItem('watched'))
    : [],
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(state.watchlist));
    localStorage.setItem('watched', JSON.stringify(state.watched));
  }, [state]);

  return (
    <GlobalContext.Provider
      context={GlobalContext}
      value={{ watchlist: state.watchlist, watched: state.watched, dispatch }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;
