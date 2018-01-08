import styled from "styled-components";

export const StyledWrapper = styled.div`
  // align-items: center;
  // justify-content: center;
  // font-size: 30px;
  // z-index: 100;
  // height: 100%;
  // width: 100%;
  // display: flex;
  position: absolute;
  width: 500px;
  top: 50%;
  left: 50%;
  margin-left: -250px;
`;
export const StyledOverlay = styled.div`
  background-color: rgb(51, 51, 51);
  opacity: 0.8;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 10;
`;
export const StyledSlider = styled.div``;
export const StyledContent = styled.div`
  height: 500px;
  width: 500px;
  position: relative;
  z-index: 15;
`;
// export const StyledOverlay = styled.div`
//   ${props => (props.resize === true ? "height: 40px" : "height: 24px")};
// `;
export const StyledLeftIcon = styled.img`
  ${props => (props.resize === true ? "height: 40px" : "height: 24px")};
`;
export const StyledRightIcon = styled.img``;
export const LeftIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 40%;
  height: 130px;
  width: 50px;
  background: rgba(0, 0, 0, 0.78);
  ${props => (props.isMoveLeftPossible === true ? "opacity: 1" : "opacity: 0")};
  &: hover {
    background: rgba(0, 0, 0, 0.51);
    transition: 1s;
  }
`;
export const RightIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 40%;
  height: 130px;
  width: 50px;
  background: rgba(0, 0, 0, 0.78);
  ${props => (props.isMoveRightPossible === true ? "opacity: 1" : "opacity: 0")};
  &: hover {
    background: rgba(0, 0, 0, 0.51);
    transition: 1s;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;
