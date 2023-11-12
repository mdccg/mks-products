import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Montserrat';
    margin: 0;
  }

  html, body, #root {
    flex-direction: column;
    min-height: 100vh;
    display: flex;
  }
`;