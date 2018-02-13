import styled, { keyframes } from "styled-components";

export const HomePageWrapper = styled.div`
  min-height: 800px;
  text-align: center;
`;
export const StyledContent = styled.div``;
export const StyledSlider = styled.div`
  height: 600px;
  overflow: hidden;
  background-color: black;
`;

const slide = keyframes`
   0%  { opacity: 0;transform: scale(1)}
   20%  { opacity: 1;}
   80%  { opacity: 1; }
  100% {  opacity: 0;transform: scale(1.1);}
`;

export const StyledImg = styled.div`
  background-repeat: no-repeat;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 100%;
  visibility: inherit;
  animation: ${slide} 5s ease-out infinite;
`;
