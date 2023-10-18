import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/home' element={<Home />} />
      <Route path='/detail/:id' element={<Detail />} />
      <Route path='/create' element={<CreateDriver />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  );
}

export default App;
