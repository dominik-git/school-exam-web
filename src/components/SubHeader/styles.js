import styled from "styled-components";

export const StyledText = styled.h1`
  color:#352c2c;;
  font-weight:bold;
  font-size:28px;
  margin:0;
  padding:0;
  background: #eaecee;
  height:40px;
  display:flex;
  align-items:center;

`;

export const StyledBackgound = styled.div`
background-image: url(${props => props.image});
background-repeat: no-repeat;
background-position: 0% 45%; 
height:300px;
`;
export const StyledWrapper = styled.div`

`;