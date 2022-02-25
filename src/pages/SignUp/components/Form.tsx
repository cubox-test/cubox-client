import CommonButton from 'common/Button';
import useSignUp from 'hooks/SignUp/useSignUp';
import platform from 'platform';
import React, {useEffect, useRef, useState} from 'react';
import styled, {css} from 'styled-components';
import {convertOs, convertRole} from '../utils/formConvertServerForm';
import {
  isPasswordConfirmed,
  isVerifiedEmail,
  isVerifiedPassword,
} from '../utils/validator';
import AdminAuthentication from './AdminAuthentication/AdminAuthentication';
import TermConditions from './TermConditions';

interface FormProps {
  unique_key: string;
  name: string;
  age: number;
  foreigner: boolean;
}

function Form({unique_key, name, age, foreigner}: FormProps) {
  const [form, setForm] = useState({
    email: '',
    password: '',
    nickName: '',
    confirmPasswrod: '',
  });
  const [disable, setDisable] = useState(true);
  const [isAgree, setIsAgree] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const userAgent = useRef(platform.os?.family);

  const [selected, setSelected] = useState({
    emailNotSelected: true,
    passwordNotSelected: true,
    confirmPasswrodNotSelected: true,
  });

  const [validation, setValidation] = useState({
    isEmail: false,
    isPassword: false,
    isConfirm: false,
  });
  const {email, nickName, password, confirmPasswrod} = form;

  useEffect(() => {
    const {isConfirm, isEmail, isPassword} = validation;
    setDisable(
      !isConfirm ||
        !isEmail ||
        !isPassword ||
        !(nickName.length > 0) ||
        !isAgree,
    );
  }, [validation, nickName.length, isAgree]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name: tagName, value} = e.target;
    if (tagName === 'email') {
      setForm(prev => ({...prev, email: value}));
      setValidation(prev => ({...prev, isEmail: isVerifiedEmail(value)}));
    } else if (tagName === 'password') {
      setForm(prev => ({...prev, password: value}));
      setValidation(prev => ({...prev, isPassword: isVerifiedPassword(value)}));
    } else if (tagName === 'nickName') {
      setForm(prev => ({...prev, nickName: value}));
    } else {
      setForm(prev => ({...prev, confirmPasswrod: value}));
      setValidation(prev => ({
        ...prev,
        isConfirm: isPasswordConfirmed(password, value),
      }));
    }
  };

  const onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const {name: tagName} = e.target;
    if (tagName === 'email') {
      setSelected(prev => ({...prev, emailNotSelected: false}));
    } else if (tagName === 'password') {
      setSelected(prev => ({...prev, passwordNotSelected: false}));
    } else {
      setSelected(prev => ({...prev, confirmPasswrodNotSelected: false}));
    }
  };

  const {signup} = useSignUp({
    email,
    nickName,
    password,
    unique_key,
    name,
    age,
    foreigner,
    roleId: convertRole(isAdmin),
    signed: isAgree,
    useragent: convertOs(userAgent.current),
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signup();
  };

  return (
    <Wrapper>
      <FormStyled onSubmit={onSubmit}>
        <Heading1>회원정보 입력</Heading1>
        <Label>
          <span>이메일</span>
          <InputBox>
            <Input
              onFocus={onFocus}
              placeholder="이메일을 입력하세요."
              type="email"
              name="email"
              value={email}
              onChange={onChange}
            />
            <ValidateRes
              isValidate={validation.isEmail || selected.emailNotSelected}>
              * 이메일 형식에 맞지 않습니다.
            </ValidateRes>
          </InputBox>
        </Label>
        <Label>
          <span>닉네임</span>
          <InputBox>
            <Input
              placeholder="닉네임을 입력하세요."
              name="nickName"
              value={nickName}
              onChange={onChange}
            />
          </InputBox>
        </Label>
        <Label>
          <span>비밀번호</span>
          <InputBox>
            <Input
              placeholder="비밀번호를 입력하세요."
              onFocus={onFocus}
              type="password"
              name="password"
              value={password}
              onChange={onChange}
            />
            <ValidateRes
              isValidate={
                validation.isPassword || selected.passwordNotSelected
              }>
              * 비밀번호는 8자리 이상, 대소문자, 특수문자를 하나씩 포함해야
              합니다.
            </ValidateRes>
          </InputBox>
        </Label>
        <Label>
          <span>비밀번호확인</span>
          <InputBox>
            <Input
              placeholder="비밀번호를 입력하세요."
              onFocus={onFocus}
              type="password"
              name="confirmPassword"
              value={confirmPasswrod}
              onChange={onChange}
            />
            <ValidateRes
              isValidate={
                validation.isConfirm || selected.confirmPasswrodNotSelected
              }>
              * 비밀번호가 같지 않습니다.
            </ValidateRes>
          </InputBox>
        </Label>
        <AdminAuthentication isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
        <TermConditions isAgree={isAgree} setIsAgree={setIsAgree} />
        <Button type="submit" disabled={disable}>
          회원가입
        </Button>
      </FormStyled>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 50%;
  height: 100%;
`;

const FormStyled = styled.form`
  margin-top: 6.25rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 0 3.125rem;
  label:nth-of-type(1) {
    margin-top: 40px;
  }
`;

const Heading1 = styled.h1`
  font-size: 1.875rem;
`;

const InputBox = styled.div`
  border: 0.0625rem solid black;
  width: 80%;
`;

const Input = styled.input`
  width: 90%;
  box-sizing: border-box;
  border: none;
  margin: 0.3125rem 0;
  padding: 0.3125rem;
`;

const Label = styled.label`
  margin-top: 0.625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    margin: 0 auto 0.9375rem 10%;
  }
`;

const Button = styled(CommonButton)`
  width: 80%;
  margin: 1.875rem auto;
  height: 2.5rem;
  &:hover {
    ${props =>
      props.disabled
        ? css`
            filter: brightness(1);
            cursor: auto;
          `
        : css`
            filter: brightness(0.85);
            cursor: pointer;
          `}
  }
`;

const ValidateRes = styled.div<{isValidate: boolean}>`
  display: ${props => (props.isValidate ? 'none' : 'block')};
  text-align: left;
  width: 90%;
  margin: 0.3125rem auto;
  font-size: 0.75rem;
  color: red;
`;

export default Form;
