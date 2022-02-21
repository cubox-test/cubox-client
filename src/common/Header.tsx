import {Link} from 'react-router-dom';
import styled from 'styled-components';

function Header() {
  return (
    <Wrapper>
      <Heading1>LOGO</Heading1>
      <nav>
        <NavItems>
          <Item>
            <Link to="/signup">회원가입</Link>
          </Item>
          <Item>
            <Link to="/signin">로그인</Link>
          </Item>
        </NavItems>
      </nav>
    </Wrapper>
  );
}
const Wrapper = styled.header`
  display: flex;
  height: 100%;
  justify-content: space-between;
`;

const Heading1 = styled.h1`
  display: flex;
  align-items: center;
`;
const Item = styled.li`
  height: 6.25rem;
  line-height: 6.25rem;
`;

const NavItems = styled.ul`
  display: flex;
  height: 100%;
  ${Item} + ${Item} {
    margin-left: 0.625rem;
  }
`;

export default Header;
