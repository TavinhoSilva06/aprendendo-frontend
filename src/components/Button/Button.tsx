import styled from "styled-components";
import { backgroundColor, boxShadow, variant } from "styled-system";

type ButtonProps = {
  variant: string
}

// Define um componente Button estilizado
export const Button = styled.button<ButtonProps>`
  padding: 10px 20px;
  cursor: pointer;

  ${variant({
    variants: {
      default: {
         backgroundColor: 'transparent',
         color: '#fff', 
         border: '2px solid rgba(255, 255, 255, 0.2)'
      },
      primary: {
        padding: '10px 70px',
        borderRadius:'4px',
        backgroundColor: '#fff',
        boxShadow: '2px solid rgba(255, 255, 255, 0.2)',
      },
    },
  })}
`;

Button.defaultProps = {
  variant: 'default'
}