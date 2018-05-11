import styled from "styled-components";

export const StyledWrapper = styled.div`
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // background: ${props => props.theme.color.neutral};
  // margin: 10px;
  // width: 200px;
  // height: 200px;
  // max-width: 350px;
  position: relative;
  width:25%;
  margin:15px;
  max-width:210px;
  min-width:150px;
  display:inline-block;
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
