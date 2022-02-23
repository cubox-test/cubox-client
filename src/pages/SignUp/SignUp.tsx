import Footer from 'common/Footer';
import Layout from 'common/Layout';
import useIsCertification from 'hooks/SignUp/useIsCertification';
import Form from './components/Form';

function SignUp() {
  const {unique_key, name} = useIsCertification();

  return (
    <Layout>
      <Layout.Main>
        <Form unique_key={unique_key} name={name} />
      </Layout.Main>
      <Layout.Footer>
        <Footer />
      </Layout.Footer>
    </Layout>
  );
}

export default SignUp;
