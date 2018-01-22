import styled from "styled-components";

export const StyledModalWraper = styled.div`
  display: ${props => props.open === true ? "flex" : "none"};
  flex-direction:column;
  justify-content:center;
  text-align:center;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -150px;
  background: #d4d2d2;
  width: 300px;
  height: 200px;
`;

export const StyledButtonGroup = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-around;
`;