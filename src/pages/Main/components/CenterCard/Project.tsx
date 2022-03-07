import React from 'react';
import styled from 'styled-components';

interface ProjectProps {
  projectName: string;
}

function Project({projectName}: ProjectProps) {
  return (
    <Wrapper>
      <LabelNormal>
        <span>{projectName}</span>
        <GraphWrapper>
          <Graph percent={100} zindex={100} />
          <Graph percent={80} backgroundColor="#F3D892" zindex={200} />
          <Graph percent={20} backgroundColor="#5EF977" zindex={300} />
        </GraphWrapper>
      </LabelNormal>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  &:not(:nth-child(1)) {
    margin-top: 0.625rem;
  }
`;

const LabelNormal = styled.label`
  span {
    width: 20%;
  }
  display: flex;
`;

const GraphWrapper = styled.div`
  width: 80%;
  position: relative;
`;

const Graph = styled.div<{
  zindex: number;
  backgroundColor?: string;
  percent: number;
}>`
  z-index: ${props => props.zindex};
  background-color: ${props => props.backgroundColor || '#eeeeee'} !important;
  position: absolute;
  left: 0;
  width: ${props => `${props.percent}%`};
  top: 0;
  bottom: 0;
`;

export default Project;
