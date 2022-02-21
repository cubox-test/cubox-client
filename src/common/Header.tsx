import {Link} from 'react-router-dom';
import styled from 'styled-components';

function Header() {
  return (
    <HeaderStyled>
      <h1>LOGO</h1>
      <nav>
        <ul>
          <li>
            <Link to="/signup">회원가입</Link>
          </li>
          <li>
            <Link to="/signin">로그인</Link>
          </li>
        </ul>
      </nav>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header``;

export default Header;
