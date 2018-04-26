import styled from "styled-components";
import image from "../../assets/worldmap-dotted.png";
import bmwImage from "../../assets/bmw_order.png";

export const StyledFormWrapper = styled.div``;
export const StyledBackground = styled.div`
  background-color: ${props => props.theme.color.carbon};
  background-image: url(${image});
  background-repeat: repeat;
  background-position: center center;
  width: 100%;
  min-height: 450px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 15px;
`;
export const StyledFormOverlay = styled.div`
  position: relative;
  height: 100%;
  width: 70%;
  margin: 0 auto;
  &:after {
    content: "";
    display: block;
    position: fixed;
    background-image: url(${bmwImage});
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    opacity: 0.2;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translateX(-25%) translateY(-50%);
  }
  @media (max-width: 1300px) {
    &:after {
      transform: translateX(-50%) translateY(-50%);
    }
  }
`;
export const StyledWrapper = styled.div`
  height: 100vh;
`;
export const StyledRow = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  justify-content: space-around;
  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

export const StyledContactInfo = styled.div`
  width: 400px;
  display: inline-block;
  color: white;
`;
export const StyledContactPageWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const StyledDeleteCell = styled.span`
  color: red;
  &:hover {
    cursor: pointer;
    font-size: 24px;
  }
`;

export const StyledTitle = styled.h2`
  margin: 20px 20px;
  padding-bottom: 10px;
  font-weight: bold;
  color: ${props => props.theme.color.watermelon};
  border-bottom: 1px solid ${props => props.theme.color.watermelon};
`;
// export const StyledReviews = styled.div`
// `;

export const StyledMessageCell = styled.div`
  height: 100px;
  word-wrap: break-word;
  overflow-y: auto;
  overflow-x: hidden;
  white-space: normal;
`;
export const StyledIconWrapper = styled.div`
  position: absolute;
  right: 0;
  text-align: center;
`;
export const StyledIcon = styled.div`
  color: ${props => props.theme.color.watermelon};
  &:hover {
    // color: ${props => props.theme.color.carbon};
  }
`;
export const StyledForm = styled.form`
  width: 50%;
  max-width: 650px;
  margin: 0 auto;
  margin-top: 20%;
`;
