import CommonButton from 'common/Button';
import useSignUp from 'hooks/SignUp/useSignUp';
import React, {useState} from 'react';
import styled from 'styled-components';

interface FormProps {
  unique_key: string;
}

function Form({unique_key}: FormProps) {
  const [form, setForm] = useState({
    email: '',
    name: '',
    password: '',
    confirmPasswrod: '',
  });
  const {email, name, password, confirmPasswrod} = form;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name: tagName, value} = e.target;
    if (tagName === 'email') {
      setForm(prev => ({...prev, email: value}));
    } else if (tagName === 'name') {
      setForm(prev => ({...prev, name: value}));
    } else if (tagName === 'password') {
      setForm(prev => ({...prev, password: value}));
    } else {
      setForm(prev => ({...prev, confirmPasswrod: value}));
    }
  };
  const {signup, message} = useSignUp({email, name, password, unique_key});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signup();
    if (message !== '') {
      console.log(message);
    }
  };

  return (
    <Wrapper>
      <FormStyled onSubmit={onSubmit}>
        <Heading1>회원정보 입력</Heading1>
        <Label>
          <span>이메일</span>
          <Input type="email" name="email" value={email} onChange={onChange} />
        </Label>
        <Label>
          <span>이름</span>
          <Input name="name" value={name} onChange={onChange} />
        </Label>
        <Label>
          <span>비밀번호</span>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </Label>
        <Label>
          <span>비밀번호확인</span>
          <Input
            type="password"
            name="confirmPassword"
            value={confirmPasswrod}
            onChange={onChange}
          />
        </Label>
        <Button type="submit">회원가입</Button>
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

const Input = styled.input`
  width: 80%;
  box-sizing: border-box;
`;

const Label = styled.label`
  margin-top: 1.25rem;
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
  height: 40;
`;

export default Form;
