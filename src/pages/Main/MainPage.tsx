import Footer from 'common/Footer';
import Header from 'common/Header';
import Layout from 'common/Layout';
import {useAppSelector} from 'hooks/Common/sotreHooks';
import useIsAuth from 'hooks/Common/useIsAuth';
import {useNavigate} from 'react-router-dom';
import Main from './components/Main';

function MainPage() {
  const navigate = useNavigate();
  const isAuth = useIsAuth();
  const {userId} = useAppSelector(state => state.auth);
  if (!isAuth) {
    navigate('/signin');
    return null;
  }

  return (
    <Layout>
      <Layout.Header>
        <Header isAuth={isAuth} />
      </Layout.Header>
      <Layout.Main>
        <Main userId={userId!} />
      </Layout.Main>
      <Layout.Footer>
        <Footer />
      </Layout.Footer>
    </Layout>
  );
}

export default MainPage;
