import color from 'color';
import styled from 'styled-components';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({children}: LayoutProps) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 10%;
  background-color: ${color.background};
`;

Layout.Header = styled.header`
  height: 6.25rem;
  background-color: inherit;
`;

Layout.Main = styled.main`
  background-color: ${color.background};
`;

Layout.Footer = styled.footer`
  margin-top: auto;
  background-color: ${color.background};
`;

export default Layout;
