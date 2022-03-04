import color from 'color';
import React from 'react';
import styled from 'styled-components';
import {GoPerson} from 'react-icons/go';
import getPercent from '../utils/getPercent';
import {useNavigate} from 'react-router-dom';
import {GetCenterInfoByUserIdRes} from 'api/Supervisor/supervisorType';

interface CenterCardProps {
  center: GetCenterInfoByUserIdRes;
}

function CenterCard({
  center: {
    assignedProjects,
    centerName,
    numberOfWorker,
    totalProjects,
    centerId,
    submittedProjects,
    waitingProjects,
  },
}: CenterCardProps) {
  const navigate = useNavigate();
  const percent = getPercent({
    total: totalProjects,
    assigned: assignedProjects,
  });
  const compeletePercent = getPercent({
    total: totalProjects,
    assigned: submittedProjects,
  });
  const isAllAssigned = assignedProjects === totalProjects;
  const isAllCompeleted = totalProjects === submittedProjects;

  const onClick = () => {
    navigate(`center/${centerId}`);
  };

  return (
    <CardWrapper onClick={onClick}>
      <TitleWrapper>
        <Title>{centerName}</Title>
      </TitleWrapper>
      <JobWrapper>
        <Label>
          total
          <TotalJobNum> {totalProjects}</TotalJobNum>
        </Label>
        <Label>
          assigned
          <AssignedJobNum isAllAssigned={isAllAssigned}>
            {' '}
            {assignedProjects}
          </AssignedJobNum>
        </Label>
        <Label>
          waiting
          <span> {waitingProjects}</span>
        </Label>
        <Label>
          배정률
          <Percent isAllAssigned={isAllAssigned}>{percent}%</Percent>
        </Label>
        <Label>
          완료율
          <Percent isAllAssigned={isAllCompeleted}>{compeletePercent}%</Percent>
        </Label>
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

const AssignedJobNum = styled.span<{isAllAssigned: boolean}>`
  font-weight: 700;
  color: ${props => (props.isAllAssigned ? 'blue' : 'red')};
`;

const Percent = styled.span<{isAllAssigned: boolean}>`
  margin-left: 0.625rem;
  color: ${props => (props.isAllAssigned ? 'blue' : 'red')};
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
