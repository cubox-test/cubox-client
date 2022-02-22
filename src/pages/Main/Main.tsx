import Footer from 'common/Footer';
import Header from 'common/Header';
import Layout from 'common/Layout';

function Main() {
  return (
    <Layout>
      <Layout.Header>
        <Header />
      </Layout.Header>
      <Layout.Main>main</Layout.Main>
      <Layout.Footer>
        <Footer />
      </Layout.Footer>
    </Layout>
  );
}

export default Main;
