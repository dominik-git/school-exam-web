import styled from "styled-components";

const StyledButton = styled.button`
  width: 100px;
  text-transform: uppercase;
  height: 40px;
  font-weight: bold;
  background: ${props => props.theme.color.watermelon};
  outline: none;
  border: none;
  color: white;
  border-radius: 5px;
`;

export default StyledButton;
