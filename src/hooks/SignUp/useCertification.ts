import AuthService from 'api/Auth/AuthService';
import {useNavigate} from 'react-router-dom';

const useCertification = () => {
  const {IMP} = window as any;
  const navigate = useNavigate();
  IMP.init('imp15289551');
  const certification = () => {
    IMP.certification({}, (rsp: any) => {
      if (rsp.success) {
        AuthService.certification(rsp.imp_uid)
          .then(({unique_key}) => {
            navigate('/signup', {state: {unique_key}});
          })
          .catch(error => {
            throw error;
          });
      } else {
        console.dir(rsp);
        alert(rsp.error_msg);
      }
    });
  };

  return certification;
};

export default useCertification;
