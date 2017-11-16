import styled from "styled-components";

export const StyledWrapper = styled.div`
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  font-size: 30px;
  z-index: 100;
  height: 100%;
  width: 100%;
  display: flex;
`;
export const StyledOverlay = styled.div`
  background-color: rgb(51, 51, 51);
  opacity: 0.8;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;
export const StyledSlider = styled.div``;
export const StyledContent = styled.div`
  background: purple;
  height: 500px;
  width: 500px;
  position: relative;
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
  top: 50%;
  height: 50px;
  width: 50px;
  ${props => (props.isMoveLeftPossible === true ? "opacity: 1" : "opacity: 0")};
  &: hover {
    background: red;
    transition: 1s;
  }
`;
export const RightIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 50%;
  height: 50px;
  width: 50px;
  ${props => (props.isMoveRightPossible === true ? "opacity: 1" : "opacity: 0")};
  &: hover {
    background: red;
    transition: 1s;
  }
`;
