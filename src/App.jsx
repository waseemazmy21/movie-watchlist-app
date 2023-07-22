import Header from './components/Header';
import Add from './pages/Add';
import WatchList from './pages/WatchList';
import Watched from './pages/Watched';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header />
        <Routes>
          <Route path='/' element={<WatchList />} />
          <Route path='/watched' element={<Watched />} />
          <Route path='/add' element={<Add />} />
        </Routes>
    </>
  );
};

export default App;
