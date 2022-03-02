import {GetProjectInfoByCenterIdRes} from 'api/Center/supervisorType';
import color from 'color';
import styled from 'styled-components';
import Project from './Project';

interface ProjectSectionProps {
  projects: GetProjectInfoByCenterIdRes[];
}

function ProjectSection({projects}: ProjectSectionProps) {
  return (
    <Section>
      <ul>
        {projects.map(project => (
          <Project key={project.projectId} project={project} />
        ))}
      </ul>
    </Section>
  );
}

const Section = styled.section`
  width: 20%;
  background-color: ${color.second};
  border-radius: 0.25rem;
  padding: 0.625rem;
  box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.1);
  transition: all 0.2s;
  margin-right: 0.625rem;
  height: 100%;
`;

export default ProjectSection;
