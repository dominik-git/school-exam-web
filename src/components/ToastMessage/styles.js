import Styled from "styled-components";

const info = () => "background: blue";
const danger = () => "background: red";
const success = () => "background: green";

export const StyledToastWrapper = Styled.div`
 ${props => props.success && success()};
 ${props => props.info && info()};
 ${props => props.danger && danger()};
  width: 500px;
  height: 100px;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -250px;
`;

export const styledd = Styled.div``;
