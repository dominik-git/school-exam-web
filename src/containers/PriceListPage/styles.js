import styled from "styled-components";

export const StyledWrapper = styled.div`
  min-height: 500px;
`;

export const StyledTitle = styled.h2`
  margin: 20px 20px;
  padding-bottom: 10px;
  font-weight: bold;
  color: ${props => props.theme.color.watermelon};
  border-bottom: 1px solid ${props => props.theme.color.watermelon};
`;
export const StyledRow = styled.div`
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  // justify-content: space-around;
  @media (max-width: 850px) {
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    align-items: center;
  }
`;
