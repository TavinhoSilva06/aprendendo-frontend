import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./theme";

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');

*{
   margin: 0;
   padding: 0;
   font-family: "Raleway", sans-serif;
 }

 body {
   background-color: ${({ theme }) => theme.colors.primary};
 }
`;