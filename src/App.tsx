import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from 'pages/Main/MainPage';
import SignInPage from 'pages/SignIn/SignInPage';
import CertificationPage from 'pages/SignUp/CertificationPage';
import SignUpPage from 'pages/SignUp/SignUpPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/certification" element={<CertificationPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
