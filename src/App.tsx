import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from 'pages/Main/Main';
import SignIn from 'pages/SignIn/SignIn';
import Certification from 'pages/SignUp/Certification';
import SignUp from 'pages/SignUp/SignUp';

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
