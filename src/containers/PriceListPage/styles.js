import styled from "styled-components";

export const StyledWrapper = styled.div`
  min-height: 100vh;
  margin-top: 20px;
  width: 70%;
  margin: 40px auto;
  border-radius: 5px;
`;
export const StyledServicesWrapper = styled.div``;
export const StyledContent = styled.div`
  // box-shadow: 5px 5px 5px grey;
`;

export const StyledTitle = styled.h2`
  margin: 20px 20px;
  padding-bottom: 10px;
  font-weight: bold;
  color: ${props => props.theme.color.watermelon};
  border-bottom: 1px solid ${props => props.theme.color.watermelon};
  box-shadow: 5px 5px 5px grey;
`;
export const StyledRow = styled.div`
  @media (max-width: 1180px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;
