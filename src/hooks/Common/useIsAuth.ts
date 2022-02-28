import AuthService from 'api/Auth/AuthService';
import {useEffect} from 'react';
import {authenticate, setUserId} from 'redux/slice/auth/auth';
import {useAppDispatch, useAppSelector} from './sotreHooks';

const useIsAuth = () => {
  const dispatch = useAppDispatch();
  const {isAuth} = useAppSelector(state => state.auth);
  useEffect(() => {
    AuthService.me()
      .then(({roleId}) => {
        dispatch(authenticate({isAuth: true, roleId}));
      })
      .catch(() => {
        dispatch(authenticate({isAuth: false, roleId: null}));
        dispatch(setUserId({userId: null}));
      });
  }, [dispatch]);

  return isAuth;
};

export default useIsAuth;
