import { injectGlobal } from "styled-components";
import img from "../assets/bmw6.jpg";

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html {
   box-sizing: border-box;
   font-size: 16px;
   height: 100%;
   width:100%;
   font-family:sans-serif,'Roboto', Arial, Helvetica;
  }
  // @font-face {
  //   font-family: 'Roboto', Arial, Helvetica, sans-serif;
  //   // src: url('https://fonts.googleapis.com/css?family=Roboto');
  // }
  body {
    font-family:sans-serif,'Roboto', Arial, Helvetica;
    height: 100%;
    max-width: 1800px;
    margin: 0 auto;
   #root {
      min-width: 53.6rem;
      width: 100%;
    }
  }
  #root {
   height: inherit;
   height:100%;
  }
`;
