import { injectGlobal } from "styled-components";
import texture from "./texture7.jpg";

/* eslint no-unused-expressions: 0 */
injectGlobal`
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
@font-face {
  font-family: 'Marlboro';
  src: url('./fonts/Marlboro.ttf');
}
@font-face {
  font-family: 'OpenSans';
  src: url('../fonts/OpenSans-Regular.ttf')  format('truetype');
 
}
  html {
    height: 100%;
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  body {
    // height: 100%;
   font-family:"Marlboro OpenSans";
    margin: 0 auto;
    background: url(${texture}) no-repeat center center fixed;
    background-size: cover;
    
  
  }
 
  #root {
    height:100%;
  }
  .row{
    margin:0;
    padding:0;
  }

  p {
    margin:0;
    padding:0;
  }
  
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px white inset;
    background-color:white;
}
`;
