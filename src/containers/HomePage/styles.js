import styled, { keyframes } from "styled-components";

export const HomePageWrapper = styled.div`
  height: 100%;
  text-align: center;
  background-color: black;
`;
export const StyledContent = styled.div``;
export const StyledSlider = styled.div`
  height: 100%;
  overflow: hidden;
  background-color: black;
  opacity: 0.2;
`;

const slide = keyframes`
   0%  { opacity: 0;transform: scale(1)}
   20%  { opacity: 1;}
   80%  { opacity: 1; }
  100% {  opacity: 0;transform: scale(1.1);}
`;

// export const StyledImg = styled.div`
//   background-repeat: no-repeat;
//   background-image: url(${props => props.image});
//   background-size: cover;
//   background-position: center center;
//   width: 100%;
//   height: 100%;
//   visibility: inherit;
//   animation: ${slide} 5s ease-out infinite;
// `;
export const StyledImg = styled.img`
  // background-repeat: no-repeat;
  // background-image: url(${props => props.image});
  // background-size: cover;
  // background-position: center center;
  width: 100%;
  height: 100%;
  // visibility: inherit;
  animation: ${slide} 5s ease-out infinite;

`;
