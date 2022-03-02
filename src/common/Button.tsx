import color from 'color';
import styled from 'styled-components';

interface ButtonProps {
  isActive?: boolean;
}

const Button = styled.button<ButtonProps>`
  border: none;
  cursor: pointer;
  padding: 0.3125rem;
  border-radius: 0.3125rem;
  background-color: ${props =>
    props.isActive === undefined || props.isActive
      ? color.buttonColor
      : 'gray'};
  color: #fff;
  transition: all 0.2s;
  &:hover {
    filter: brightness(0.85);
  }
`;

export default Button;
