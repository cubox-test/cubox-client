import color from 'color';
import Button, {DisabledButton} from 'common/Button';
import {FormInfo, formInfos, InputName} from 'pages/SignUp/utils/FormInfo';
import {isVerifiedName} from 'pages/SignUp/utils/validator';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import AuthInput from './AuthInput/AuthInput';
import Input from './Input';
import SelectInput from './SelectInput';
import TermAgreement from './TermAgreement';

interface SignupFormProps {
  unique_key: string;
  name: string;
  age: number;
  foreigner: boolean;
}

const nameInfo = new FormInfo(
  'nickName',
  '이름을 입력하세요',
  isVerifiedName,
  '이름은 필수 입력사항입니다.',
);

function SignupForm(props: SignupFormProps) {
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    nickName: '',
  });

  const [validationMsg, setValidationMsg] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    nickName: '',
  });

  const [disabled, setDisabled] = useState(true);
  const [autority, setAutority] = useState('');
  const [authentication, setAuthentication] = useState(false);
  const [agree, setAgree] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value, name} = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value.trim(),
    }));
  };

  const onAuthAutority = () => {
    setAuthentication(true);
  };

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const {value} = e.target;
    setAutority(value);
  };

  const onCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {checked} = e.target;
    setAgree(checked);
  };

  useEffect(() => {
    setDisabled(
      isDisable([...Object.values(formInfos), nameInfo], authentication, agree),
    );
  }, [authentication, agree]);

  useEffect(() => {
    formInfos.confirmPassword.setValidateMsg(
      form.password,
      form.confirmPassword,
    );
    setValidationMsg(prev => ({
      ...prev,
      confirmPassword: formInfos.confirmPassword.displayValidationMsg,
    }));
  }, [form.confirmPassword, form.password]);

  useEffect(() => {
    formInfos.email.setValidateMsg(form.email);
    setValidationMsg(prev => ({
      ...prev,
      email: formInfos.email.displayValidationMsg,
    }));
  }, [form.email]);

  useEffect(() => {
    formInfos.password.setValidateMsg(form.password);
    setValidationMsg(prev => ({
      ...prev,
      password: formInfos.password.displayValidationMsg,
    }));
  }, [form.password]);

  useEffect(() => {
    nameInfo.setValidateMsg(form.nickName);
    setValidationMsg(prev => ({
      ...prev,
      nickName: nameInfo.displayValidationMsg,
    }));
  }, [form.nickName]);

  return (
    <Wrapper>
      <Title>
        회원 정보 입력
        <div>CUBOX 에 오신것을 환영합니다.</div>
        <div>회원 정보를 입력해 주세요.</div>
      </Title>
      <InputWrapper>
        {Object.values(formInfos).map(forminfo => (
          <Input
            formInfo={forminfo}
            onChange={onChange}
            key={forminfo.name}
            value={form[forminfo.name as InputName]}
            validateMessage={validationMsg[forminfo.name as InputName]}
          />
        ))}
      </InputWrapper>
      <Section>
        <SectionTitle>
          이름
          <span> * </span>
        </SectionTitle>
        <Input
          formInfo={nameInfo}
          onChange={onChange}
          key={nameInfo.name}
          value={form[nameInfo.name as InputName]}
          validateMessage={validationMsg[nameInfo.name as InputName]}
        />
      </Section>
      <Section>
        <SectionTitle>
          권한 설정
          <span> * </span>
        </SectionTitle>
        <SelectInput onSelectChange={onSelectChange} />
      </Section>
      {autority && (
        <Section>
          <SectionTitle>
            인증
            <span> * </span>
          </SectionTitle>
          <AuthInput onAuthAutority={onAuthAutority} autority={autority} />
        </Section>
      )}
      <AggrementBox>
        <TermAgreement agree={agree} onCheck={onCheck} />
      </AggrementBox>
      <ButtonWrapper>
        {disabled ? (
          <DisabledButton disabled>회원가입</DisabledButton>
        ) : (
          <Button>회원가입</Button>
        )}
      </ButtonWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
  @media screen and (min-width: 1024px) {
    width: 34rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 34rem;
  }
  @media screen and (max-width: 767px) {
    width: 31.25rem;
  }
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3.4375rem;
  div {
    font-size: 1.125rem;
    color: ${color.titleDescription};
  }
  div:first-child {
    margin-top: 1.125rem;
  }
`;

const InputWrapper = styled.div``;

const Section = styled.section`
  margin-top: 2.25rem;
`;

const SectionTitle = styled.div`
  font-weight: 700;
  span {
    color: ${color.status.alarm};
  }
  margin-bottom: 0.8125rem;
`;

const AggrementBox = styled.div`
  margin-top: 3.375rem;
  margin-bottom: 1.5625rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  height: 3.3125rem;
`;

function isDisable(forms: FormInfo[], authentication: boolean, agree: boolean) {
  if (!authentication || !agree) {
    return true;
  }
  let disable = true;
  forms.forEach(form => (disable = form.displayValidationMsg.length > 0));
  return disable;
}

export default SignupForm;
