import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      tertiary: string
      quaternary: string
      white: string
      black: string
      navy: string
      lightNavy: string
      yellow: string
    }
    fonts: {
      fkscreamer: {
        backslanted: string
        slanted: string
        upright: string
      }
      dmsans: string
    }
  }
}
