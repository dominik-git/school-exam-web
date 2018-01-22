import styled from "styled-components";

export const StyledFormWrapper = styled.div``;
export const StyledWrapper = styled.div`
  min-height:600px;
`;

export const StyledContactInfo = styled.div`
  width: 400px;
  display: inline-block;
  color: white;
`;
export const StyledContactPageWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const StyledDeleteCell = styled.span`
  color:red;
  &:hover{
    cursor: pointer;
    font-size: 24px;
  }
`;

export const StyledMessageCell = styled.div`
height: 100px;
word-wrap: break-word;
overflow-y: auto;
overflow-x: hidden;
white-space: normal;
`;
