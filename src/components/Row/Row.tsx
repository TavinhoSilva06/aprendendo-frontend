import styled from "styled-components"; 
import { layout, LayoutProps, SpaceProps, space } from "styled-system";

// Define um tipo de propriedades para o componente Row
type RowProps = LayoutProps & SpaceProps;

// Define um componente Row estilizado
export const Row = styled.div<RowProps>`
  display: flex;
  flex-direction: row;
  ${layout} // Aplica propriedades de layout
  ${space} // Aplica propriedades de espaçamento
`;
