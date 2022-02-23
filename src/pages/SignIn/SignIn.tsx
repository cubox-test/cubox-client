import Footer from 'common/Footer';
import Layout from 'common/Layout';
import Form from './components/Form';

function SignIn() {
  return (
    <Layout>
      <Layout.Main>
        <Form />
      </Layout.Main>
      <Layout.Footer>
        <Footer />
      </Layout.Footer>
    </Layout>
  );
}

export default SignIn;
