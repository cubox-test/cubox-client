import AuthService from 'api/Auth/AuthService';
import {SignUpReq} from 'api/Auth/authType';
import {useNavigate} from 'react-router-dom';

const useSignUp = (req: SignUpReq) => {
  let errorMessage = '';

  const navigate = useNavigate();
  const signup = async () => {
    try {
      await AuthService.signup(req);
      navigate('/signin');
    } catch (error: any) {
      errorMessage = error.response.data.message;
    }
  };

  return {message: errorMessage as string, signup};
};

export default useSignUp;
