import { ThemeProvider } from 'styled-components';

// Define o tema do aplicativo
const fontSizes: any = [14, 18, 20, 96];
fontSizes.body = fontSizes[0];
fontSizes.bodyLarge = fontSizes[1];
fontSizes.bodyExtraLarge = fontSizes[2];
fontSizes.displayExtraLarge = fontSizes[3];

const primary = '#2567B4';
const secondary = '#F9B531';

const theme = {
  fontSizes,
  fonts: {
    primary: 'Raleway',
    secondary: 'Roboto',
  },
  colors: {
    primary,
    secondary,
  },
};

export type ThemeType = typeof theme;

// Provedor de tema que passa o tema definido para todos os componentes filhos
export const Theme: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
