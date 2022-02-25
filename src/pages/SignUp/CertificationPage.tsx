import Footer from 'common/Footer';
import Layout from 'common/Layout';
import CertificationMain from './components/CertificationMain';

function CertificationPage() {
  return (
    <Layout>
      <Layout.Main>
        <CertificationMain />
      </Layout.Main>
      <Layout.Footer>
        <Footer />
      </Layout.Footer>
    </Layout>
  );
}

export default CertificationPage;
