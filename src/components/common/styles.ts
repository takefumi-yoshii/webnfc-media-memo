import { createGlobalStyle, css } from 'styled-components'
import styledReset from 'styled-reset'
import colors from './colors'
// ______________________________________________________
//
const baseStyle = css`
  html,
  body {
    font-size: 62.5%;
    background-color: ${colors.white};
  }
  body {
    font-size: 2.1rem;
    line-height: 1;
    color: ${colors.white};
    font-family: 'Teko', sans-serif;
  }
  a {
    color: ${colors.water};
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
`
const keyframes = css`
  @keyframes waveAnim1 {
    0% {
      opacity: 0.2;
    }
    25% {
      opacity: 1;
    }
    50% {
      opacity: 0.2;
    }
    75% {
      opacity: 0.2;
    }
    100% {
      opacity: 0.2;
    }
  }
  @keyframes waveAnim2 {
    0% {
      opacity: 0.2;
    }
    25% {
      opacity: 0.2;
    }
    50% {
      opacity: 1;
    }
    75% {
      opacity: 0.2;
    }
    100% {
      opacity: 0.2;
    }
  }
  @keyframes waveAnim3 {
    0% {
      opacity: 0.2;
    }
    25% {
      opacity: 0.2;
    }
    50% {
      opacity: 0.2;
    }
    75% {
      opacity: 1;
    }
    100% {
      opacity: 0.2;
    }
  }
`
// ______________________________________________________
//
export const GlobalStyle = createGlobalStyle`
  ${styledReset}
  ${baseStyle}
  ${keyframes}
`
