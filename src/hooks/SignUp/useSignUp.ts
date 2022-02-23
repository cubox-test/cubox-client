import AuthService from 'api/Auth/AuthService';
import {SignUpReq} from 'api/Auth/authType';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

const useSignUp = (req: SignUpReq) => {
  const [message, setMessage] = useState('');

  const navigate = useNavigate();
  const signup = async () => {
    try {
      await AuthService.signup(req);
      navigate('/signin');
    } catch (error: any) {
      setMessage(error.response.data as string);
    }
  };

  useEffect(() => {
    if (message) {
      alert(message);
      setMessage('');
    }
  }, [message, setMessage]);

  return {signup};
};

export default useSignUp;
