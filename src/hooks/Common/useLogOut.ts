import AuthService from 'api/Auth/AuthService';

const useLogOut = () => {
  const logout = () => {
    AuthService.logout();
  };

  return logout;
};

export default useLogOut;
