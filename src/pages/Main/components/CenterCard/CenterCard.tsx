import {Center, Project as ProjectType} from 'api/Supervisor/supervisorType';
import color from 'color';
import styled from 'styled-components';
import CenterInfo from './CenterInfo';
import Project from './Project';

interface CenterCardProps {
  center: Center;
  projects: ProjectType[];
}

function CenterCard({center, projects}: CenterCardProps) {
  const {
    centerName,
    createdProjects,
    finishedProjects,
    processingProjects,
    centerStatus,
  } = center;
  return (
    <CardWrapper>
      <Title>{centerName}</Title>
      <Status status={centerStatus} />
      {/* create, proccessing, finished */}
      <CenterInfoWrapper>
        <CenterInfo count={createdProjects} isDividerExist label="create" />
        <CenterInfo
          count={processingProjects}
          isDividerExist
          label="processing"
        />
        <CenterInfo count={finishedProjects} label="finished" />
      </CenterInfoWrapper>
      {/* ProjectWrapper */}
      <ProjectWrapper>
        {projects.map(project => (
          <Project project={project} key={project.projectId} />
        ))}
      </ProjectWrapper>
      <Button>EXPAND</Button>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  width: 21.875rem;
  background-color: #ffffff;
  & * {
    background-color: #ffffff;
  }
  box-shadow: 0 0 0.9375rem 0.0625rem rgba(0, 0, 0, 0.1);
  position: relative;
  padding: 0.55rem 1.4375rem 0;
  box-sizing: border-box;
  margin: 0.625rem;
  @media screen and (min-width: 1024px) {
    width: 20.0625rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 22.71875rem;
  }
  @media screen and (max-width: 767px) {
    width: 500px;
  }
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #555555;
`;

const Status = styled.div<{status: number}>`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  position: absolute;
  right: 1.4375rem;
  top: 1rem;
  background-color: ${props => {
    switch (props.status) {
      case 1:
        return color.status.warning;
      case 2:
        return color.status.alarm;
      default:
        return color.status.idle;
    }
  }};
`;

const CenterInfoWrapper = styled.div`
  width: 14.375rem;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
`;

const ProjectWrapper = styled.ul`
  margin-bottom: 1rem;
`;

const Button = styled.button`
  border: none;
  background-color: inherit;
  color: #048ba9;
  padding: 0.3125rem;
  cursor: pointer;
  margin-bottom: 0.5rem;
  transition: all 0.3s;
  border-radius: 0.25rem;
  &:hover {
    filter: brightness(0.95);
  }
  &:active {
    background-color: #048ba926;
  }
`;

export default CenterCard;
