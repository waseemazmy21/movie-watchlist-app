import { GlobalContext } from './ContextProvider';
import { useContext } from 'react';

function useGlobalContext() {
  return useContext(GlobalContext);
}

export default useGlobalContext;
