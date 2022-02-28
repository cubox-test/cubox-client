import color from 'color';
import React from 'react';
import styled from 'styled-components';
import {GoPerson} from 'react-icons/go';

interface CenterCardProps {
  center: {
    centerId?: string;
    centerName: string;
    numberOfWorker: number;
    totalJobs: number;
    assignedJobs: number;
    waitingJobs: number;
  };
}

function CenterCard({
  center: {assignedJobs, centerName, numberOfWorker, totalJobs, waitingJobs},
}: CenterCardProps) {
  const percent = assignedJobs / totalJobs;

  return (
    <CardWrapper>
      <TitleWrapper>
        <Title>{centerName}</Title>
      </TitleWrapper>
      <JobWrapper>
        <Label>
          total
          <TotalJobNum> {totalJobs}</TotalJobNum>
        </Label>
        <Label>
          assigned
          <AssignedJobNum> {assignedJobs}</AssignedJobNum>
        </Label>
        <Percent>{percent}%</Percent>
      </JobWrapper>
      <div>chart</div>
      <WorkerNumWrapper>
        <WorkerNum>
          {numberOfWorker}
          <GoPerson />
        </WorkerNum>
      </WorkerNumWrapper>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.2);
  border-radius: 0.25rem;
  margin: 0.625rem 0;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
  }
  padding: 1rem;
  position: relative;
`;

const TitleWrapper = styled.div``;

const Title = styled.span`
  font-weight: 700;
  font-size: 1.25rem;
`;

const Label = styled.label``;

const JobWrapper = styled.div`
  ${Label} + ${Label} {
    margin-left: 0.625rem;
  }
`;

const TotalJobNum = styled.span`
  font-weight: 700;
`;

const AssignedJobNum = styled.span`
  font-weight: 700;
  color: red;
`;

const Percent = styled.span`
  margin-left: 0.625rem;
  color: red;
`;

const WorkerNumWrapper = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
  border: 0.0625rem solid ${color.textColor};
  width: 3.125rem;
  height: 1.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
`;

const WorkerNum = styled.span``;

export default CenterCard;
