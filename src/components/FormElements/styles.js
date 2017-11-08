import styled from "styled-components";

export const FormControlWrapper = styled.div`
  width: 100%;
`;
export const StyledInput = styled.input`
  height: ${props => props.theme.rem(25)};
  width: 100%;
  border: 1px solid grey;
  border-radius: ${props => props.theme.rem(3)};
  padding-left: ${props => props.theme.rem(5)};
  box-sizing: border-box;
`;

export const LabelWrapper = styled.div`
  padding-bottom: ${props => props.theme.rem(3)};
`;
export const StyledFormGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: ${props => props.theme.rem(20)};
`;
export const CheckBoxWrapper = styled.div`
  cursor: pointer;
`;
export const RadioWrapper = styled.div`
  cursor: pointer;
`;
export const FormControlStaticWrapper = styled.span``;

export const StyledWrapper = styled.div`
  text-align: center;
`;
export const StyledContent = styled.div``;

export const StyledField = styled.div`
  width: 100%;
`;
export const StyledCaptcha = styled.div`
  padding-bottom: ${props => props.theme.rem(10)};
`;
export const PasswordWrapper = styled.div`
  position: relative;
  width: 100%;
`;
export const WrapperPasswordButton = styled.div`
  position: absolute;
  top: ${props => props.theme.rem(1)};
  right: ${props => props.theme.rem(-7)};
  button {
    height: ${props => props.theme.rem(27)};
    border: none;
    border-radius: ${props => props.theme.rem(3)};
  }
`;

export const CapsLockMessage = styled.span`
  font-size: ${props => props.theme.rem(13)};
  color: ${props => props.theme.color.warning};
`;
export const StyledFormLabel = styled.div`
  padding-bottom: ${props => props.theme.rem(3)};
`;
