import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import SignupPage from './pages/SignupPage/SignupPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'*' || '/'} element={<HomePage />} />
        <Route path={'/signup'} element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
