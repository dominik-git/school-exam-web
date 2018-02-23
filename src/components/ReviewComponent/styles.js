import styled from "styled-components";

export const StyledWrapper = styled.div`
  background-color: ${props => props.theme.color.neutral};
  height: 250px;
  width: 30%;
  max-width: 400px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 850px) {
    width: 55%;
    margin-bottom: 10px;
    min-width: 270px;
  }
`;

export const StyledRightSide = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StyledLeftSide = styled.div`
  text-align: center;
  background: white;
  font-size: 18px;
`;
export const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.color.carbon};
  color: #ffffff;
  border-bottom: 3px solid #bbb;
  box-shadow: 0 8px 17px 0 ${props => props.theme.color.sky}, 0 6px 20px 0 ${props => props.theme.color.sky};
`;
export const StyledIcon = styled.span`
  border-radius: 50%;
  color: ${props => props.theme.color.carbon};
`;
export const StyledMessage = styled.span`
  word-wrap: break-word;
  min-height: 130px;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: ${props => props.theme.color.carbon};
`;
export const StyledDate = styled.div``;
export const StyledNick = styled.div`
  font-size: 16px;
  font-weight: bold;
`;
export const StyledDelete = styled.div`
  display: inline-block;
  background: red;
  width: 30px;
  height: 100px;
`;
export const StyledApprove = styled.div`
  display: inline-block;
  background: green;
  height: 100px;
  width: 30px;
`;
export const StyledReviewFotter = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  width: 80%;
  margin-bottom: 20px;
`;
export const StyledDeleteIcon = styled.span`
  color: red;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;
