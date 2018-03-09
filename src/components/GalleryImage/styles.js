import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme.color.sky};
  margin: 10px;
  max-width: 350px;
`;

export const StyledContent = styled.div``;
export const StyledImage = styled.img`
  width: 200px;
  height: 200px;
  margin: 30px;
`;
export const StyledDelete = styled.div``;

export const StyledDeleteIcon = styled.span`
  color: red;
  &:hover {
    cursor: pointer;
  }
`;
