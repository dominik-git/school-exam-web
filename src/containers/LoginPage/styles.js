import styled from "styled-components";

export const StyledFormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 400px;
  box-shadow: 5px 5px 5px grey;
  & form {
    width: 350px;
  }
`;
export const StyledWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StyledSubmitButton = styled.button`
  width: 80%;
  height: 36px;
  background: rgb(202, 202, 202);
`;
