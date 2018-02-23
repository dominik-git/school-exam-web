import styled from "styled-components";
import image from "../../assets/worldmap-dotted.png";

export const StyledFormWrapper = styled.div``;
export const StyledWrapper = styled.div``;
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
export const StyledRow = styled.div`
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
