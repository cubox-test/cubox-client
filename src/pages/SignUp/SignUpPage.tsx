import {CertificationRes} from 'api/Auth/authType';
import Layout from 'common/Layout';
import useIsCertification from 'hooks/SignUp/useIsCertification';
import {useLocation} from 'react-router-dom';
import Form from './components/Form';

function SignUpPage() {
  useIsCertification();
  const location = useLocation();
  if (location.state == null) {
    return null;
  }
  const {unique_key, name, age, foreigner} = location.state as CertificationRes;

  return (
    <Layout>
      <Layout.Main>
        <Form
          unique_key={unique_key}
          name={name}
          age={age}
          foreigner={foreigner}
        />
      </Layout.Main>
    </Layout>
  );
}

export default SignUpPage;
