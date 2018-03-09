import styled from "styled-components";

export const StyledWrapper = styled.div`
  // height: 100%;
  width: 70%;
  margin: 0 auto;
`;
export const StyledServicesWrapper = styled.div`
  // display: flex;
  // flex-direction: column;
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

export const StyledIconWrapper = styled.div`
  position: absolute;
  right: 0;
  text-align: center;
`;
export const StyledIcon = styled.div`
  color: ${props => props.theme.color.watermelon};
  &:hover {
    color: ${props => props.theme.color.carbon};
  }
`;
export const StyledForm = styled.form`
  width: 50%;
`;

export const StyledFormOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background: aliceblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
