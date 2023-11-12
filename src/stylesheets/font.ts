import { createGlobalStyle } from 'styled-components';
import MontserratBlackItalic from '../assets/fonts/Montserrat/Montserrat-BlackItalic.ttf';
import MontserratBlack from '../assets/fonts/Montserrat/Montserrat-Black.ttf';
import MontserratBoldItalic from '../assets/fonts/Montserrat/Montserrat-BoldItalic.ttf';
import MontserratBold from '../assets/fonts/Montserrat/Montserrat-Bold.ttf';
import MontserratExtraBoldItalic from '../assets/fonts/Montserrat/Montserrat-ExtraBoldItalic.ttf';
import MontserratExtraBold from '../assets/fonts/Montserrat/Montserrat-ExtraBold.ttf';
import MontserratExtraLightItalic from '../assets/fonts/Montserrat/Montserrat-ExtraLightItalic.ttf';
import MontserratExtraLight from '../assets/fonts/Montserrat/Montserrat-ExtraLight.ttf';
import MontserratItalic from '../assets/fonts/Montserrat/Montserrat-Italic.ttf';
import MontserratLightItalic from '../assets/fonts/Montserrat/Montserrat-LightItalic.ttf';
import MontserratLight from '../assets/fonts/Montserrat/Montserrat-Light.ttf';
import MontserratMediumItalic from '../assets/fonts/Montserrat/Montserrat-MediumItalic.ttf';
import MontserratMedium from '../assets/fonts/Montserrat/Montserrat-Medium.ttf';
import MontserratRegular from '../assets/fonts/Montserrat/Montserrat-Regular.ttf';
import MontserratSemiBoldItalic from '../assets/fonts/Montserrat/Montserrat-SemiBoldItalic.ttf';
import MontserratSemiBold from '../assets/fonts/Montserrat/Montserrat-SemiBold.ttf';
import MontserratThinItalic from '../assets/fonts/Montserrat/Montserrat-ThinItalic.ttf';
import MontserratThin from '../assets/fonts/Montserrat/Montserrat-Thin.ttf';

export const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratBlackItalic});
    font-weight: 900;
    font-style: italic;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratBlack});
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratBoldItalic});
    font-weight: 700;
    font-style: italic;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratBold});
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratExtraBoldItalic});
    font-weight: 800;
    font-style: italic;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratExtraBold});
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratExtraLightItalic});
    font-weight: 200;
    font-style: italic;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratExtraLight});
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratItalic});
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratLightItalic});
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratLight});
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratMediumItalic});
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratMedium});
    font-weight: 500;
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
    src: url(${MontserratSemiBoldItalic});
    font-weight: 600;
    font-style: italic;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratSemiBold});
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratThinItalic});
    font-weight: 100;
    font-style: italic;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratThin});
    font-weight: 100;
    font-style: normal;
  }
`;