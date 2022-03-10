import color from 'color';
import React from 'react';
import styled, {keyframes} from 'styled-components';

function Loading() {
  return (
    <Outer>
      <Ring>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Ring>
    </Outer>
  );
}

const Outer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: transparent;
`;

const LoadingAnimation = keyframes`
  from{
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Ring = styled.div`
  display: inline-block;
  position: absolute;
  width: 80px;
  height: 80px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid ${color.textColor};
    border-radius: 50%;
    animation: ${LoadingAnimation} 0.4s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${color.textColor} transparent transparent transparent;
  }

  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;

export default Loading;
