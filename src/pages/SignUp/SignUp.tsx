import {CertificationRes} from 'api/Auth/authType';
import Layout from 'common/Layout';
import useIsCertification from 'hooks/SignUp/useIsCertification';
import {useLocation} from 'react-router-dom';
import Form from './components/Form';

function SignUp() {
  useIsCertification();
  const location = useLocation();
  if (location.state == null) {
    return null;
  }
  const {unique_key, name} = location.state as CertificationRes;

  return (
    <Layout>
      <Layout.Main>
        <Form unique_key={unique_key} name={name} />
      </Layout.Main>
    </Layout>
  );
}

export default SignUp;
