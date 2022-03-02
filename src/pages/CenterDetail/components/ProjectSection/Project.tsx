import {GetProjectInfoByCenterIdRes} from 'api/Center/supervisorType';
import styled from 'styled-components';

interface ProjectProps {
  project: GetProjectInfoByCenterIdRes;
  onClick(projectId: string): void;
}

function Project({project, onClick}: ProjectProps) {
  const {projectName, projectId} = project;

  const getProjectJob = () => {
    onClick(projectId);
  };

  return <Item onClick={getProjectJob}>{projectName}</Item>;
}

const Item = styled.li`
  width: 100%;
  text-align: center;
  padding: 8px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  &:last-child {
    border-bottom: none;
  }
  transition: all 0.2s;
  &:hover {
    filter: brightness(0.9);
  }
  cursor: pointer;
`;

export default Project;
