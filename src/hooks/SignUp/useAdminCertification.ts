import AuthService from 'api/Auth/AuthService';

const useAdminCertification = (email: string) => {
  const authAdmin = async () => {
    try {
      const {certificationNumber} = await AuthService.certificateAdmin({email});
      return certificationNumber;
    } catch (error: any) {
      alert(error.response.data);
    }
  };

  return authAdmin;
};

export default useAdminCertification;
