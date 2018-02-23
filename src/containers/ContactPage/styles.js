import styled from "styled-components";

export const StyledFormWrapper = styled.div`
  display: inline-block;
  width: 100%;
`;
export const StyledFormContent = styled.div``;
export const StyledContactInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const StyledRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const StyledDetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const StyledIconWrapper = styled.span`
  height: 50px;
  width: 50px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  // background: ${props => props.theme.color.carbon};
  color: ${props => props.theme.color.watermelon};
`;

export const StyledSubmitButton = styled.button`
  width: 100px;
  text-transform: uppercase;
  height: 40px;
  font-weight: bold;
  background: rgb(255, 59, 63);
  outline: none;
  border: none;
  color: white;
  border-radius: 5px;
`;

export const StyledText = styled.span`
  color: black;
`;
export const StyledContactPageWrapper = styled.div`
  // display: flex;
  // flex-direction: row;
`;
export const StyledTitle = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const StyledSelect = styled.select`
  background: black;
  height: 34px;
  width: 268px;
`;
