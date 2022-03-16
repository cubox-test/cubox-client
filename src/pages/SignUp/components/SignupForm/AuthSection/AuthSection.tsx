import color from 'color';
import {useAppSelector} from 'hooks/Common/sotreHooks';
import React from 'react';
import styled from 'styled-components';
import AuthInput from './AuthInput/AuthInput';
import Timer from './Timer';

interface AuthSectionProps {
  onAuthAutority(): void;
  autority: string;
}

function AuthSection({autority, onAuthAutority}: AuthSectionProps) {
  const {isRunning} = useAppSelector(state => state.auth.roleAuth);
  return (
    <Section>
      <SectionTitle>
        인증
        <span> * </span>
      </SectionTitle>
      <AuthInput onAuthAutority={onAuthAutority} autority={autority} />
      {isRunning && <Timer />}
    </Section>
  );
}

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

export default AuthSection;
