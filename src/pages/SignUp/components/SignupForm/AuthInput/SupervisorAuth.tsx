import {CertificateAdminRes} from 'api/Auth/authType';
import Button, {DisabledButton} from 'common/Button';
import useAdminCertification from 'hooks/SignUp/useAdminCertification';
import {FormInfo} from 'pages/SignUp/utils/FormInfo';
import {isVerifiedCuboxEmail} from 'pages/SignUp/utils/validator';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import InputCommon from '../Input';

interface SupervisorAuthProps {
  onAuthAutority(): void;
}

const formInfo = new FormInfo(
  'cuboxEmail',
  'CUBOX 이베일을 입력하세요.',
  isVerifiedCuboxEmail,
  'cubox email 계정이 아닙니다.',
);

const numberInfo = new FormInfo(
  'number',
  '메일을 확인한 후 인증번호를 입력해주세요.',
  (num: string) => {
    return num.length === 6;
  },
  '인증번호는 6자리 입니다.',
);

function SupervisorAuth({onAuthAutority}: SupervisorAuthProps) {
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [validationMsg, setValidationMsg] = useState('');
  const [numberValidationMsg, setNumberValidationMsg] = useState('');
  const [emailProcess, setEmailProcess] = useState(true);
  const [serverNumber, setServerNumber] = useState(0);
  const {mutate: authAdmin} = useAdminCertification();
  const [authorization, setAuthorization] = useState(false);

  const onSuccess = (data: CertificateAdminRes) => {
    setServerNumber(data.certificationNumber);
    setEmailProcess(false);
  };
  const onClick = async () => {
    authAdmin({email}, {onSuccess});
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value, name} = e.target;
    if (name === 'cuboxEmail') {
      setEmail(value);
    } else {
      setNumber(value);
    }
  };

  useEffect(() => {
    formInfo.setValidateMsg(email);
    setValidationMsg(formInfo.displayValidationMsg);
  }, [email]);

  useEffect(() => {
    numberInfo.setValidateMsg(number);
    setNumberValidationMsg(numberInfo.displayValidationMsg);
  }, [number]);

  const onAuthorizationAdmin = () => {
    if (isAuthrization(serverNumber, parseInt(number))) {
      onAuthAutority();
      setAuthorization(true);
    } else {
      alert('인증번호가 틀렸습니다. 다시 확인해주세요.');
    }
  };

  return (
    <Wrapper>
      {emailProcess ? (
        <>
          <Input
            fillWidth={70}
            formInfo={formInfo}
            onChange={onChange}
            validateMessage={validationMsg}
            value={email}
          />
          <ButtonWrapper>
            {validationMsg ? (
              <DisabledButton disabled>인증하기</DisabledButton>
            ) : (
              <Button type="button" onClick={onClick}>
                인증하기
              </Button>
            )}
          </ButtonWrapper>
        </>
      ) : (
        <>
          {authorization ? (
            <div>인증이 완료되었습니다.</div>
          ) : (
            <>
              <Input
                fillWidth={70}
                formInfo={numberInfo}
                onChange={onChange}
                validateMessage={numberValidationMsg}
                value={number}
              />
              <ButtonWrapper>
                {numberValidationMsg ? (
                  <DisabledButton disabled>인증하기</DisabledButton>
                ) : (
                  <Button type="button" onClick={onAuthorizationAdmin}>
                    인증하기
                  </Button>
                )}
              </ButtonWrapper>
            </>
          )}
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Input = styled(InputCommon)`
  width: 70%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 15%;
`;

function isAuthrization(serverNumber: number, clientNumber: number) {
  return serverNumber === clientNumber;
}

export default SupervisorAuth;
