import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export const StyledOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
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
    background: rgb(99, 99, 99);
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
    background: rgb(99, 99, 99);
    transition: 1s;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;
