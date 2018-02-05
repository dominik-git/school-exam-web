import styled from "styled-components";

export const StyledWrapper = styled.div`
  display:flex;
  justify-content:space-between;
  text-align:center;
  flex-direction:row;
  flex-wrap: wrap;
  height:auto;
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
  display:none;
`;