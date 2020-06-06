import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  fontFamily: `'Press Start 2P', cursive, 'Arial', sans-serif`,
  colors: {
    background: {
      primary: '#08040C',
      secondary: '#151515',
      tertiary: '#2C2138',
    },
    text: {
      primary: '#C4C4C4',
      secondary: '#ABABAB',
    },
  },
  fontSize: {
    heading: {
      small: '20px',
      regular: '24px',
      large: '32px',
    },
    text: {
      small: '12px',
      regular: '14px',
      large: '16px',
    },
  },
  hoverOpacity: '0.85',
};
