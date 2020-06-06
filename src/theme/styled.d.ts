import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: {
        primary: string;
        secondary: string;
        tertiary: string;
      };
      text: {
        primary: string;
        secondary: string;
      };
    };
    fontFamily: string;
    fontSize: {
      heading: {
        small: string;
        regular: string;
        large: string;
      };
      text: {
        small: string;
        regular: string;
        large: string;
      };
    };
    hoverOpacity: string;
  }
}
