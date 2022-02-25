import Footer from 'common/Footer';
import Header from 'common/Header';
import Layout from 'common/Layout';
import useIsAuth from 'hooks/Common/useIsAuth';
import Main from './components/Main';

function MainPage() {
  const isAuth = useIsAuth();

  return (
    <Layout>
      <Layout.Header>
        <Header isAuth={isAuth} />
      </Layout.Header>
      <Layout.Main>
        <Main />
      </Layout.Main>
      <Layout.Footer>
        <Footer />
      </Layout.Footer>
    </Layout>
  );
}

export default MainPage;
