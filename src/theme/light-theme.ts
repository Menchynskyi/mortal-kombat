import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  fontFamily: `'Press Start 2P', cursive, 'Arial', sans-serif`,
  colors: {
    background: {
      primary: '#08040C',
      secondary: '#F8F8F8',
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
