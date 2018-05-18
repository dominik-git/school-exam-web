import styled from "styled-components";

export const StyledWrapper = styled.div`
  height: 230px;
  width: 230px;
  position: relative;
  margin: 15px;
  display: inline-block;
`;

export const StyledContent = styled.div``;
export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;
export const StyledDelete = styled.div``;

export const StyledDeleteIcon = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  color: grey;
  &:hover {
    cursor: pointer;
  }
`;
