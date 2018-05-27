import styled from "styled-components";

const StyledTitle = styled.h1`
  font-size: 23px;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 3px;
  color: ${props => props.theme.color.neutral};
  background: ${props => props.theme.color.watermelon};
  box-shadow: 5px 5px 5px grey;
`;
export default StyledTitle;
