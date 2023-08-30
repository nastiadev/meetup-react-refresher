import './App.css';
import AllMeetupsPage from './pages/AllMeetups';
import Favourite from './pages/Favourite';
import NewMeetUp from './pages/NewMeetUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainNavigation from './components/layouts/MainNavigation';

function App() {
  return (
    <div>
      <BrowserRouter>
        <MainNavigation />
        <Routes>
          <Route path='/' element={<AllMeetupsPage />}></Route>
          <Route path='/new-meetup' element={<NewMeetUp />}></Route>
          <Route path='/favourites' element={<Favourite />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
