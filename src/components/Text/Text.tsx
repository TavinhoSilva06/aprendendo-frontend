import styled from "styled-components";
import { color, ColorProps, space, SpaceProps, typography, TypographyProps } from "styled-system";

// Define um tipo de propriedades para o componente Text
type TextProps = TypographyProps & SpaceProps & ColorProps;

// Define um componente Text estilizado
export const Text = styled.p<TextProps>`
  font-family: "Raleway", sans-serif; // Define a família da fonte
  color: #fff;
  ${color}
  ${typography} // Aplica propriedades de tipografia
  ${space} // Aplica propriedades de espaçamento
`;
