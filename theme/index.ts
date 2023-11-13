import { DefaultTheme } from 'styled-components';
import localFont from 'next/font/local';
import { DM_Sans } from 'next/font/google'; // eslint-disable-line camelcase

// fonts

const FKScreamerBackslanted = localFont({
  src: '../public/fonts/FKScreamer-Backslanted.otf',
  variable: '--font-fkscreamer-backslanted',
});

const FKScreamerSlanted = localFont({
  src: '../public/fonts/FKScreamer-Slanted.otf',
  variable: '--font-fkscreamer-slanted',
});

const FKScreamerUpright = localFont({
  src: '../public/fonts/FKScreamer-Upright.otf',
  variable: '--font-fkscreamer-upright',
});

const DMSans = DM_Sans({ subsets: ['latin'] });

const theme: DefaultTheme = {
  colors: {
    primary: '#BF2CF9',
    secondary: '#0070f3',
    tertiary: '#06EBEF',
    quaternary: '#A6FF00',
    white: '#EDE9FF',
    black: '#000',
    navy: '#070223',
    lightNavy: '#0F0C2B',
    yellow: '#FCC100',
  },
  fonts: {
    fkscreamer: {
      backslanted: FKScreamerBackslanted.style.fontFamily,
      slanted: FKScreamerSlanted.style.fontFamily,
      upright: FKScreamerUpright.style.fontFamily,
    },
    dmsans: DMSans.style.fontFamily,
  },
};

export default theme;
