import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 400px;
  min-height: 400px;
  border: 2px solid ${props => props.theme.color.carbon};
  margin: 100px auto;
  // display: flex;
  // flex-direction: column;
  // justify-content: flex-start;
  // align-items: center;
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const StyledPhotoRow = styled.div`
  min-height: 60%;
  margin: 20px;
`;

export const StyledLabel = styled.label`
  width: 100px;
  padding: 8px 15px;
  align-text: center;
  background: ${props => props.theme.color.carbon};
  color: ${props => props.theme.color.neutral};
  border-radius: 5px;
`;
export const StyledI = styled.i`
  color: ${props => props.theme.color.carbon};
`;
