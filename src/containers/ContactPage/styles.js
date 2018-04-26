import styled from "styled-components";

export const StyledFormWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
`;
export const StyledForm = styled.form`
  // display: flex;
  width: 100%;
  // justify-content: center;
`;
export const StyledFormContent = styled.div``;
export const StyledContactInfo = styled.div`
  width: 70%;
  height: 100%;
  margin: 0 auto;
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

export const StyledField = styled.div`
  display: inline-block;
  width: 30%;
  margin: 20px;
`;

export const StyledFieldRow = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

export const StyledText = styled.span`
  color: black;
`;
export const StyledContactPageWrapper = styled.div`
  height: 100vh;
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
