import { injectGlobal } from "styled-components";
import img from "../assets/bmw6.jpg";

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html {
   box-sizing: border-box;
   font-size: 16px;
   height: 100%;
   width:100%;
  }
  @font-face {
    font-family: 'Roboto', sans-serif;
    src: url('https://fonts.googleapis.com/css?family=Roboto');
  }
  body {
    background: #ADA996;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    
    height: 100%;
    max-width: 1800px;
    margin: 0 auto;
   font-family: 'Roboto', sans-serif;
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
