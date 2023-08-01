import Header from './components/Header';
import Add from './pages/Add';
import Watchlist from './pages/WatchList';
import Watched from './pages/Watched';
import { Routes, Route } from 'react-router-dom';
import ContextProvider from './context/ContextProvider';

const App = () => {
  return (
    <ContextProvider>
      <Header />
      <div className='container py-4'>
        <Routes>
          <Route path='/' element={<Watchlist />} />
          <Route path='/watched' element={<Watched />} />
          <Route path='/add' element={<Add />} />
        </Routes>
      </div>
    </ContextProvider>
  );
};

export default App;
