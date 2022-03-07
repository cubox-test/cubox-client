import styled from 'styled-components';

interface CenterInfoProps {
  label: string;
  isDividerExist?: boolean;
}

function CenterInfo({label, isDividerExist}: CenterInfoProps) {
  return (
    <Wrapper>
      <LabelSmall>
        {label}
        <Count>10</Count>
      </LabelSmall>
      {isDividerExist && <Divider />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  position: relative;
  padding: 0 0.625rem;
`;

const LabelSmall = styled.label`
  font-size: 0.875rem;
`;

const Count = styled.div`
  text-align: center;
  font-size: 1.25rem;
  margin-top: 1.25rem;
`;

const Divider = styled.div`
  width: 0.0625rem;
  height: 2.875rem;
  background-color: #222222;
  position: absolute;
  right: 0;
  bottom: -0.625rem;
`;

export default CenterInfo;
