import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  text-align: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const StyledImagePickerSelect = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border: 2px solid ${props => props.theme.color.watermelon};
  &:hover {
    background: ${props => props.theme.color.sky};
  }
`;

export const StyledCreateIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  margin: 25px;
  &:hover {
    background: ${props => props.theme.color.sky};
  }
`;
