import styled from 'styled-components';

const Button = styled.button`
  border: none;
  cursor: pointer;
  height: 3.125rem;
  border-radius: 0.3125rem;
  background-color: rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export default Button;
