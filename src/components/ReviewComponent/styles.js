import styled from "styled-components";

export const StyledWrapper = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  border: 3px solid #aaa;
  border-bottom: 3px solid #bbb;
  // box-shadow: 0 8px 17px 0 ${props => props.theme.color.sky}, 0 6px 20px 0 ${props => props.theme.color.sky};
  @media (max-width: 700px) {
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
export const StyledIcon = styled.span``;
export const StyledMessage = styled.span`
  word-wrap: break-word;
  min-height: 130px;
  padding: 15px;
`;
export const StyledDate = styled.div``;
export const StyledNick = styled.div``;
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
export const StyledDeleteIcon = styled.span`
  color: red;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;
