import HeaderWithoutButton from 'common/HeaderWithoutButton';
import Layout from 'common/Layout';
import Form from './components/Form';

function SignInPage() {
  return (
    <Layout>
      <Layout.Header>
        <HeaderWithoutButton />
      </Layout.Header>
      <Layout.Main>
        <Form />
      </Layout.Main>
    </Layout>
  );
}

export default SignInPage;
