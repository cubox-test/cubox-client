import styled from 'styled-components';

interface LayoutProps {
  children: React.ReactNode;
}
function Layout({children}: LayoutProps) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  width: 75rem;
  margin: 0 auto;
  position: relative;
`;

Layout.Header = styled.div`
  height: 6.25rem;
`;

Layout.AuthMain = styled.main`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

export default Layout;
