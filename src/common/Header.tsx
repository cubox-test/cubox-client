import useLogOut from 'hooks/Common/useLogOut';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import CommonButton from './Button';

interface HeaderProps {
  isAuth: boolean;
}

function Header({isAuth}: HeaderProps) {
  const {logout} = useLogOut();

  const onClick = () => {
    logout();
  };

  return (
    <Wrapper>
      <Heading1>LOGO</Heading1>
      {isAuth ? (
        <Button onClick={onClick}>로그아웃</Button>
      ) : (
        <nav>
          <NavItems>
            <Item>
              <Link to="/certification">회원가입</Link>
            </Item>
            <Item>
              <Link to="/signin">로그인</Link>
            </Item>
          </NavItems>
        </nav>
      )}
    </Wrapper>
  );
}
const Wrapper = styled.header`
  display: flex;
  height: 100%;
  justify-content: space-between;
`;

const Button = styled(CommonButton)`
  margin: auto 0;
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
