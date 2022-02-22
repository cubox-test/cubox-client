import CommonButton from 'common/Button';
import styled from 'styled-components';

function Form() {
  return (
    <Wrapper>
      <FormStyled>
        <Heading1>회원정보 입력</Heading1>
        <Label>
          <span>이메일</span>
          <Input />
        </Label>
        <Label>
          <span>이름</span>
          <Input />
        </Label>
        <Label>
          <span>비밀번호</span>
          <Input />
        </Label>
        <Label>
          <span>비밀번호확인</span>
          <Input />
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
    margin-top: 6.25rem;
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
  background-color: rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export default Form;
