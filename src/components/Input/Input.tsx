import styled from "styled-components";
import { flex, FlexProps } from "styled-system";

// Define um tipo de propriedades para o componente Input
type InputProps = FlexProps;

// Define um componente Input estilizado
export const Input = styled.input<InputProps>`
  background-color: transparent;
  padding: 10px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.2); // Define a cor do placeholder
  }

  ${flex} // Aplica propriedades de layout flexível
`;
