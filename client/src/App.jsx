import { Route, Routes, useLocation } from 'react-router-dom';
import LandingPage from './components/LandingPage.jsx';
import CreateDriver from './components/CreateDriver.jsx';
import Home from './components/Home.jsx';
import Error404 from './components/Error404.jsx';
import Nav from './components/Nav.jsx';
import Detail from './components/Detail.jsx';

function App() {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== '/' ? <Nav /> : ''}
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/drivers' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/create' element={<CreateDriver />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
