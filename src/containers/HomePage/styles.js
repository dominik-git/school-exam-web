import styled, { keyframes } from "styled-components";

export const HomePageWrapper = styled.div`
  min-height: 100vh;
  width: 70%;
  margin: 0 auto;
`;
export const StyledContent = styled.div``;
export const StyledSlider = styled.div`
  height: 400px;
  overflow: hidden;
  background-color: black;
}
`;
export const StyledPhotoWrapper = styled.div`
  width: 300px;
  display: inline-block;
`;
export const StyledPhoto = styled.img`
  width: 100%;
  height: 200px;
`;
const slide = keyframes`
   0%  { opacity: 0;transform: scale(1)}
   20%  { opacity: 1;}
   80%  { opacity: 1; }
  100% {  opacity: 0;transform: scale(1.1);}
`;
export const StyledCarouselWrapper = styled.div`
  width: 80%;
  height: 400px;
  margin: 0 auto;
`;
export const StyledTitle = styled.h3`
  margin-bottom: 20px;
  padding-left: 20px;
  padding-bottom: 10px;
  font-size: 23px;
  padding-top: 10px;
  margin-top: 20px;
  font-weight: bold;
  box-shadow: 5px 5px 5px grey;
  color: ${props => props.theme.color.neutral};
  background: ${props => props.theme.color.watermelon};
`;

export const StyledImg = styled.img`
  width: 50%;
  max-width: 1200px;
  height: 100%;
  animation: ${slide} 5s ease-out infinite;
`;

export const StyledRow = styled.div`
  min-height: 250px;
  text-align: center;
`;

export const StyledUserContent = styled.div`
  width: 70%;
  margin: 0 auto;
`;
