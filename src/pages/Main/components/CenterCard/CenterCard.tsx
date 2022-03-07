import styled from 'styled-components';
import CenterInfo from './CenterInfo';
import Project from './Project';

function CenterCard() {
  return (
    <CardWrapper>
      <Title>Center1 </Title>
      <Status />
      {/* create, proccessing, finished */}
      <CenterInfoWrapper>
        <CenterInfo isDividerExist label="create" />
        <CenterInfo isDividerExist label="proccessing" />
        <CenterInfo label="finished" />
      </CenterInfoWrapper>
      {/* ProjectWrapper */}
      <ProjectWrapper>
        <Project projectName="project 1" />
        <Project projectName="project 2" />
        <Project projectName="project 3" />
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
  margin: 20px;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #555555;
`;

const Status = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  position: absolute;
  right: 1.4375rem;
  top: 1rem;
  background-color: #5ef977;
`;

const CenterInfoWrapper = styled.div`
  width: 14.375rem;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
`;

const ProjectWrapper = styled.div`
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
