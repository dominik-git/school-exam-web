import { injectGlobal } from "styled-components";
import BmwLogo from "../assets/bmwLogo.jpg";

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html {
  background: url(${BmwLogo});
   box-sizing: border-box;
   font-size: 16px;
   height: 100%;

  }
  @font-face {
    font-family: 'Roboto', sans-serif;
    src: url('https://fonts.googleapis.com/css?family=Roboto');
  }
  body {
   height: 100%;
   width:100%;
   margin: 0;
   font-family: 'Roboto', sans-serif;
   #root {
      min-width: 53.6rem;
    }
  }
  #root {
   height: inherit;
  }
`;
