import { injectGlobal } from "styled-components";

/* eslint no-unused-expressions: 0 */
injectGlobal`
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
// @font-face {
//   font-family: 'Marlboro';
//   src: url('./fonts/Marlboro.ttf');
// }
@font-face {
  font-family: 'OpenSans';
  src: url('../fonts/OpenSans-Regular.ttf')  format('truetype');
 
}
  html {
    height: 100%;
    margin:0;
    padding:0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  body {
    height: 100%;
   font-family:"OpenSans";
    margin: 0 auto;
    background-color: white;
  
  }
 
  #root {
    height:100%;
  }
  .row{
    margin:0;
    padding:0;
  }
  
`;
