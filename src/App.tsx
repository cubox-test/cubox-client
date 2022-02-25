import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from 'pages/Main/MainPage';
import SignIn from 'pages/SignIn/SignInPage';
import Certification from 'pages/SignUp/CertificationPage';
import SignUp from 'pages/SignUp/SignUpPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/certification" element={<Certification />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
