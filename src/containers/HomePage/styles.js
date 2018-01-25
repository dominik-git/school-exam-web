import styled, { keyframes } from "styled-components";



export const HomePageWrapper = styled.div`
  min-height:800px;
  text-align: center;
`;
export const StyledContent = styled.div``;
export const StyledSlider = styled.div`
  height: 600px;
  overflow:hidden;
  background-color: black;
`;

const slide = keyframes`
   0%  { opacity: 0;transform: scale(1)}
   20%  { opacity: 1;}
   80%  { opacity: 1; transform: scale(1.1);}
  100% {  opacity: 0;transform: scale(1);}
`;
// @keyframes imagebulger {
//   0%, 100% {
//     background-size: 100% auto;
//     -webkit-background-size: 100%;
//   }
//   50% {
//     background-size: 50% auto;
//     -webkit-background-size: 50%;
//   }
// }
export const StyledImg = styled.div`
  background-repeat: no-repeat;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 100%;
  opacity: 1;
  visibility: inherit;
  z-index: 20;

  -webkit-animation: ${slide} 5s linear infinite;
`;
