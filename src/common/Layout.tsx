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

export default Layout;
