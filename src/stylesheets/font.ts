import { createGlobalStyle } from 'styled-components';
import MontserratBold from '../assets/fonts/Montserrat/Montserrat-Bold.ttf';
import MontserratLight from '../assets/fonts/Montserrat/Montserrat-Light.ttf';
import MontserratRegular from '../assets/fonts/Montserrat/Montserrat-Regular.ttf';
import MontserratSemiBold from '../assets/fonts/Montserrat/Montserrat-SemiBold.ttf';

export const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratBold});
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratLight});
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratRegular});
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratSemiBold});
    font-weight: 600;
    font-style: normal;
  }
`;