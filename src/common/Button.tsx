import color from 'color';
import styled from 'styled-components';

const Button = styled.button`
  border: none;
  cursor: pointer;
  padding: 0.3125rem;
  border-radius: 0.3125rem;
  background-color: ${color.buttonColor};
  color: #fff;
  transition: all 0.2s;
  &:hover {
    filter: brightness(0.85);
  }
`;

export default Button;
