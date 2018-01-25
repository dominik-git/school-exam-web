import { injectGlobal } from "styled-components";
import MyFont from "./fonts/Montserrat-Regular.ttf";

/* eslint no-unused-expressions: 0 */
injectGlobal`
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
@font-face {
  font-family: MyFont;
  src: url('${MyFont}') format('opentype');
}
  html {
    margin:0;
    padding:0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  body {
    // font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;
    height: 100%;
    margin: 0 auto;
    background-color: #FBFBFB;
   #root {
      width: 100%;
    }
  }
  #root {
   height: inherit;
   height:100%;
  }
`;
