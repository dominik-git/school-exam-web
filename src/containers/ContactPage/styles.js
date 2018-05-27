import styled from "styled-components";

export const StyledFormWrapper = styled.div`
  // min-height: 100vh;
  // width: 70%;
`;
export const StyledForm = styled.form`
  // display: flex;
  width: 100%;
  // justify-content: center;
`;
export const StyledFormContent = styled.div``;
export const StyledContactInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  background: ${props => props.theme.color.neutral};
`;
export const StyledContactRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
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
export const StyledContent = styled.div`
  display: flex;
  flex-direction: row;
`;
export const StyledContactMap = styled.div`
  width: 50%;
`;

export const StyledContactPageWrapper = styled.div`
  min-height: 100vh;
  width: 70%;
  margin: 40px auto;
`;
export const StyledTitle = styled.h4`
  background: ${props => props.theme.color.watermelon};
  color: ${props => props.theme.color.neutral};
  padding-left: 20px;
  padding-bottom: 10px;
  font-size: 23px;
  padding-top: 10px;
  text-align: center;
  border-radius: 3px;
  width: 100%;
  box-shadow: 5px 5px 5px grey;
`;
export const StyledSelect = styled.select`
  background: black;
  height: 34px;
  width: 268px;
`;
