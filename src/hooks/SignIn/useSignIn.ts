import AuthService from 'api/Auth/AuthService';
import {SignInReq} from 'api/Auth/authType';
import {useNavigate} from 'react-router-dom';

const useSignIn = (req: SignInReq) => {
  let errorMessage = '';

  const navigate = useNavigate();
  const signin = async () => {
    try {
      await AuthService.signin(req);
      navigate('/');
    } catch (error: any) {
      console.dir(error);
      errorMessage = error.response.data as string;
    }
  };

  return {message: errorMessage, signin};
};

export default useSignIn;
