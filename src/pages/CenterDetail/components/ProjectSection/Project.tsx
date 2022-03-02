import {GetProjectInfoByCenterIdRes} from 'api/Center/supervisorType';
import color from 'color';
import styled from 'styled-components';

interface ProjectProps {
  project: GetProjectInfoByCenterIdRes;
}

function Project({project}: ProjectProps) {
  const {projectName} = project;

  return <Item>{projectName}</Item>;
}

const Item = styled.li`
  background-color: ${color.second};
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
