import {GetJobInfoByProjectIdRes} from 'api/Supervisor/supervisorType';
import Button from 'common/Button';
import React, {useState} from 'react';
import styled from 'styled-components';
import {SelectState} from '../SectionWrapper';
import Job from './Job';

interface JobsSectionProps {
  jobs: GetJobInfoByProjectIdRes[];
  selectClick(select: SelectState): void;
  select: SelectState;
}

function JobSection({jobs, select: s, selectClick}: JobsSectionProps) {
  const [select, setSelecte] = useState(s);
  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const name = (e.target as HTMLButtonElement).name as SelectState;
    setSelecte(name);
    selectClick(name);
  };

  return (
    <Section>
      <ButtonWrapper onClick={onClick}>
        <Button name="total" isActive={isTotalSelected(select)}>
          total
        </Button>
        <Button name="assigned" isActive={isAssignedSelected(select)}>
          assigned
        </Button>
        <Button name="compeleted" isActive={isCompelecteSelected(select)}>
          compeleted
        </Button>
        <Button name="waiting" isActive={isWaitinSelected(select)}>
          waiting
        </Button>
      </ButtonWrapper>
      <ul>
        {jobs.map(job => (
          <Job job={job} />
        ))}
      </ul>
    </Section>
  );
}

const Section = styled.section``;

const ButtonWrapper = styled.div``;

function isTotalSelected(select: SelectState) {
  return select === 'total';
}
function isAssignedSelected(select: SelectState) {
  return select === 'assigned';
}
function isCompelecteSelected(select: SelectState) {
  return select === 'compeleted';
}
function isWaitinSelected(select: SelectState) {
  return select === 'waiting';
}

export default JobSection;
