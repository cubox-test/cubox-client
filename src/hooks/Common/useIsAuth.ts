import AuthService from 'api/Auth/AuthService';
import {useEffect, useState} from 'react';

const useIsAuth = () => {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    AuthService.me().then(data => {
      setIsAuth(data);
    });
  }, []);

  return isAuth;
};

export default useIsAuth;
