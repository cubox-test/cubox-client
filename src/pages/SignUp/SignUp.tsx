import Footer from 'common/Footer';
import Layout from 'common/Layout';
import Form from './components/Form';

// function SignUp() {
//   return (
//     <Layout.AuthMain>
//       <Form />
//     </Layout.AuthMain>
//   );
// }
function SignUp() {
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

export default SignUp;
