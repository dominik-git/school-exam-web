import styled from "styled-components";

const colorSetter = (colorTheme, ghost) => `
background: ${ghost ? "transparent" : colorTheme};
`;
const StyledButton = styled.button`
  margin: 10px;
  min-width: 100px;
  text-transform: uppercase;
  height: 40px;
  font-weight: bold;
  ${props => props.blue && colorSetter(props.theme.color.watermelon)};
  ${props => props.grey && colorSetter(props.theme.color.carbon)};
  outline: none;
  border: none;
  color: white;
  border-radius: 5px;
`;

export default StyledButton;
