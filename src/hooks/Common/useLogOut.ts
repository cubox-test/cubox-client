import AuthService from 'api/Auth/AuthService';
import {authenticate} from 'redux/slice/auth/auth';
import {useAppDispatch} from './sotreHooks';

const useLogOut = () => {
  const dispatch = useAppDispatch();
  const logout = () => {
    AuthService.logout().then(() => {
      dispatch(authenticate({isAuth: false}));
    });
  };

  return {logout};
};

export default useLogOut;
