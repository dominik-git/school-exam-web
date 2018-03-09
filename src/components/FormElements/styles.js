import styled from "styled-components";

const disabled = {
  background: "#dddddd",
  color: "#495057",
  cursor: "no-drop",
};

export const FormControlWrapper = styled.div`
  width: 100%;
`;
export const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border: black 1px solid;
`;
export const StyledInputIconWrapper = styled.div`
  width: 55px;
  background: ${props => props.theme.color.white};
  color: ${props => props.theme.color.watermelon};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledIcon = styled.span``;

const border = {
  border:`1px solid ${props => props.theme.color.watermelon}`
};

export const StyledInput = styled.input`
  height: ${props => props.theme.rem(25)};
  width: 100%;
  height: 50px;
  border: ${ props => props.border === true ? `1px solid ${props.theme.color.carbon}` : "none"};
  outline:none;
  border-radius: ${props => props.theme.rem(3)};
  padding-left: ${props => props.theme.rem(5)};
  box-sizing: border-box;
  ${props => (props.readOnly ? disabled : null)};
  &:focus {
    border-color: ${props => props.theme.color.watermelon};
  }
`;
export const StyledSelect = styled.select`
 ${props => (props.disabled ? disabled : "background:white")};
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
export const StyledFormLabel = styled.span`
  padding-bottom: ${props => props.theme.rem(3)};
  font-weight: bold;
  font-size: 16px;
`;
export const StyledTextArea = styled.textarea`
  width: 100%;
  height: 100px;
  border: none;
  &:focus {
    border-color: #01b2b7;
  }
`;
