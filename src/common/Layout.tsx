import styled from 'styled-components';

interface LayoutProps {
  children: React.ReactNode;
}
function Layout({children}: LayoutProps) {
  return <div>{children}</div>;
}

Layout.Header = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 25rem;
`;

export default Layout;
