import AuthService from 'api/Auth/AuthService';
import {SignInReq} from 'api/Auth/authType';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const useSignIn = (req: SignInReq) => {
  const [message, setMessage] = useState('');

  const navigate = useNavigate();
  const signin = async () => {
    try {
      await AuthService.signin(req);
      navigate('/');
    } catch (error: any) {
      console.dir(error);
      setMessage(error.response.data as string);
    }
  };

  return {message, signin, setMessage};
};

export default useSignIn;
