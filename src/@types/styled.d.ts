import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      common: {
        black: string;
        white: string;
      };
      primary: {
        main: string;
        light: string;
        dark: string;
      };
      secondary: {
        main: string;
        light: string;
        dark: string;
      };
      error: {
        main: string;
        light: string;
        dark: string;
      };
      success: {
        main: string;
        light: string;
        dark: string;
      };
      info: {
        main: string;
        light: string;
        dark: string;
      };
      warning: {
        main: string;
        light: string;
        dark: string;
      };
      text: {
        primary: string;
        secondary: string;
        disabled: string;
      };
      grey: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
      };
      action: {
        active: string;
        hover: string;
        disabled: string;
        disabledBackground: string;
        disabledOpacity: string;
      };
      shadow: {
        1: string;
      };
    };
  }
}
