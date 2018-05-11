import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  border-radius: 5px;
  margin: 20px;
  min-height: 120px;
  width: 70%;
  flex-direction: row;
  box-shadow: 5px 5px 5px grey;
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const StyleTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.theme.color.carbon};
  color: ${props => props.theme.color.neutral};
  height: 40px;
`;

export const StyledItemHeader = styled.div`
  width: 100%;
  display: flex;
  background: ${props => props.theme.color.watermelon};
  color: ${props => props.theme.color.neutral};
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-radius: 3px;
  padding-right: 10px;
`;
export const StyledCost = styled.div`
  padding-right: 10px;
`;
export const StyledItemBody = styled.div`
  font-size: 15px;
  text-align: center;
  padding-top: 10px;
  color: ${props => props.theme.color.carbon};
  // box-shadow: 3px 0px 5px grey, -3px 0px 5px grey;
  padding-right: 10px;
  word-wrap: break-word;
  width: 100%;
`;

export const StyledTitle = styled.span`
  margin-left: 15px;
`;

export const StyledIconWrapper = styled.div`
  background: #253993;
  width: 30%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
