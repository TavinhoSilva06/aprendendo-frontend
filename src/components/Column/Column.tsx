import styled from "styled-components";
import { layout, LayoutProps, space, SpaceProps, color, ColorProps, borderRadius, BorderRadiusProps, border, BorderProps, flexbox, FlexboxProps } from "styled-system";

// Define um tipo combinando várias propriedades de estilo
type ColumnProps = LayoutProps & SpaceProps & ColorProps & BorderRadiusProps & BorderProps & FlexboxProps;

// Define um componente Column estilizado
export const Column = styled.div<ColumnProps>`
  display: flex;
  flex-direction: column;
  ${flexbox}
  ${layout} // Aplica propriedades de layout
  ${space} // Aplica propriedades de espaçamento
  ${color} // Aplica propriedades de cor
  ${borderRadius} // Aplica propriedades de borda arredondada
  ${border} // Aplica propriedades de borda
`;
