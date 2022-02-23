import {useState} from 'react';
import CommonButton from 'common/Button';
import styled from 'styled-components';
import useSignIn from 'hooks/SignIn/useSignIn';

function Form() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const {email, password} = form;

  const {signin} = useSignIn(form);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signin();
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    if (name === 'email') {
      setForm(prev => ({...prev, email: value}));
    } else {
      setForm(perv => ({...perv, password: value}));
    }
  };

  return (
    <Wrapper>
      <FormStyled onSubmit={onSubmit}>
        <Heading1>로그인</Heading1>
        <Label>
          <span>이메일</span>
          <Input type="email" name="email" value={email} onChange={onChange} />
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
        <Button type="submit">로그인</Button>
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
