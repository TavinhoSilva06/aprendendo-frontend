import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./theme";

// Define os estilos globais do aplicativo
export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@700&display=swap');


* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
}

body {
  background-color: ${({ theme }) => theme.colors.primary}; // Usa a cor primária do tema
}
`;
