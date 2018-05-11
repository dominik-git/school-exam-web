import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: ${props => (props.isActive ? "flex" : "none")};
  background: ${props => props.theme.color.watermelon};
  position: fixed;
  justify-content: center;
  position: fixed;
  right: 100px;
  bottom: 50px;
  width: 50px;
  z-index: 10;
  &:hover {
    background: (37, 57, 147, 0.83);
  }
`;

export const StyledIcon = styled.span`
  margin: 10px;
  color: white;
`;
