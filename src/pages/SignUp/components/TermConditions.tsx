import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

interface TermConditionsProps {
  isAgree: boolean;
  setIsAgree(isAgree: boolean): void;
}

function TermConditions({isAgree, setIsAgree}: TermConditionsProps) {
  const [isCheck, setIsCheck] = useState(isAgree);

  useEffect(() => {
    setIsAgree(isCheck);
  }, [isCheck, setIsAgree]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheck(e.target.checked);
  };
  return (
    <Wrapper>
      개인정보 수집 동의
      <CheckouBox type="checkbox" checked={isCheck} onChange={onChange} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 80%;
  margin: 0.625rem auto 0;
`;

const CheckouBox = styled.input``;

export default TermConditions;
