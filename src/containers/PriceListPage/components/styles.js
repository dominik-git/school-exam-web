import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;
export const StyledForm = styled.form`
  margin: 30px;
  width: 500px;
`;

export const StyledLabel = styled.span`
  font-weight: bold;
  margin-right: 30px;
`;

export const StyledImagePickerSelect = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 70px;
  height: 70px;
  border: 2px solid ${props => props.theme.color.watermelon};
  &:hover {
    background: ${props => props.theme.color.sky};
  }
`;
export const StyledRightIcon = styled.span`
  font-size: 20px;
  position: absolute;
  right: 0;
`;

export const StyledImage = styled.div`
display:flex;
flex-direction;
justify-content:center;
align-items:center;
margin:10px;
`;

export const StyledHiddenField = styled.div`
  display: none;
`;
