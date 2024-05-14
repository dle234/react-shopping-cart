import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    typography: {
      header: string;
      title: string;
      caption: string;
      label: string;
      price: string;
    };
    color: {
      black: string;
      white: string;
      lightGray: string;
      captionBlack: string;
      borderGray: string;
    };
  }
}
