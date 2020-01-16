import styled from "styled-components";

export const StyledForm = styled.form`
  width: 400px;
  margin: 0 auto;
`;

export const StyledWrapper = styled.div`
  color: ${props => props.theme.color.carbon};
  position: relative;
  text-align: left;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 30%;
  margin: 20px 10px;
`;
export const StyledDeleteIcon = styled.i`
  position: absolute;
  right: 0;
  top: 0;
  color: red;
  &:hover {
    cursor: pointer;
  }
`;
export const StyledTitle = styled.h2`
  font-weight: bold;
`;
export const StyledImage = styled.img`
  width: 100%;
  height: 185px;
`;
export const SecondTitle = styled.h6`
  font-weight: bold;
`;

export const StyledDescription = styled.span``;
