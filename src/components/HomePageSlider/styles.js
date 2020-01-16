import styled, { keyframes } from "styled-components";

export const StyledSlider = styled.div`
  height: 500px;
  overflow: hidden;
  padding: 50px 0;
  border-radius:5px;
}
`;

const slide = keyframes`
   0%  { opacity: 0;transform: scale(1)}
   20%  { opacity: 1;}
   90%  { opacity: 1; }
  100% {  opacity: 0;transform: scale(1.1);}
`;
export const StyledCarouselWrapper = styled.div`
  width: 80%;
  height: 400px;
  margin: 0 auto;
`;

export const StyledImg = styled.img`
  width: 60%;
  max-width: 900px;
  display: block;
  margin: 0 auto;
  height: 100%;
  animation: ${slide} 6s ease-out infinite;
`;
