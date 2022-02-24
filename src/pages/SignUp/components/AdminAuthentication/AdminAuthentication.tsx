import {useEffect, useState} from 'react';
import styled from 'styled-components';
import {isVerifiedCuboxEmail} from '../../utils/validator';
import EmailInput from './EmailInput';

interface AdminAuthenticationProps {
  setIsAdmin(isAdmin: boolean): void;
  isAdmin: boolean;
}

function AdminAuthentication({setIsAdmin, isAdmin}: AdminAuthenticationProps) {
  const [email, setEmail] = useState('');
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setDisabled(!isVerifiedCuboxEmail(email));
  }, [email]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <Wrapper>
      <Title>관리자 계정 인증하기</Title>
      <InputWrapper>
        {isAdmin ? (
          <span>인증되었습니다.</span>
        ) : (
          <EmailInput
            disabled={disabled}
            email={email}
            onChange={onChange}
            setIsAdmin={setIsAdmin}
          />
        )}
      </InputWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 80%;
  margin: 0.625rem auto 0;
  text-align: left;
`;

const Title = styled.div`
  font-size: 1.25rem;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.625rem 0;
`;
export default AdminAuthentication;
