import AuthService from 'api/Auth/AuthService';
import {useEffect} from 'react';
import {authenticate} from 'redux/slice/auth/auth';
import {useAppDispatch, useAppSelector} from './sotreHooks';

const useIsAuth = () => {
  const dispatch = useAppDispatch();
  const {isAuth} = useAppSelector(state => state.auth);
  useEffect(() => {
    AuthService.me().then(data => {
      dispatch(authenticate({isAuth: data}));
    });
  }, [dispatch]);

  return isAuth;
};

export default useIsAuth;
