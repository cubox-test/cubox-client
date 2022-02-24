import React, {useState} from 'react';
import CommonButton from 'common/Button';
import styled, {css} from 'styled-components';
import useAdminCertification from 'hooks/SignUp/useAdminCertification';

interface EmailInputProps {
  email: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  disabled: boolean;
  setIsAdmin(isAdmin: boolean): void;
}

function EmailInput({disabled, email, onChange, setIsAdmin}: EmailInputProps) {
  const [emailProcess, setEmailProcess] = useState(true);
  const [certificationNumber, setCertificationNumber] = useState('');
  const [serverNumber, setServerNumber] = useState(0);
  const authAdmin = useAdminCertification(email);

  const onClick = async () => {
    const certificationNumberServer = await authAdmin();
    if (certificationNumberServer) {
      setServerNumber(certificationNumberServer);
      setEmailProcess(false);
    }
  };

  const onNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCertificationNumber(e.target.value);
  };

  const onAuthrizationAdmin = () => {
    if (isAuthrization(serverNumber, parseInt(certificationNumber))) {
      setIsAdmin(true);
    } else {
      alert('인증번호가 틀렸습니다. 다시 확인해주세요.');
    }
  };

  return (
    <>
      {emailProcess ? (
        <>
          <Input
            placeholder="이메일을 입력하세요."
            value={email}
            onChange={onChange}
          />
          <Button type="button" disabled={disabled} onClick={onClick}>
            인증하기
          </Button>
        </>
      ) : (
        <>
          <Input
            placeholder="인증번호를 입력하세요."
            value={certificationNumber}
            onChange={onNumberChange}
          />
          <Button type="button" onClick={onAuthrizationAdmin}>
            인증하기
          </Button>
        </>
      )}
    </>
  );
}

const Input = styled.input``;

const Button = styled(CommonButton)`
  height: 1.25rem;
  &:hover {
    ${props =>
      props.disabled
        ? css`
            background-color: rgba(0, 0, 0, 0.2);
            cursor: auto;
          `
        : css`
            background-color: rgba(0, 0, 0, 0.3);
            cursor: pointer;
          `}
  }
`;

export default EmailInput;

function isAuthrization(serverNumber: number, clientNumber: number) {
  return serverNumber === clientNumber;
}
