import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
  width: 100px;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: center;
  margin: 15px;
  background: ${props => props.theme.color.neutral};
  ${props => props.theme.tools.shadowBox};
  ${props =>
    props.isChecked === true &&
    css`
      background: #c5c5c5;
    `};
  &:hover {
    cursor: pointer;
    // background: grey;
  }
`;
export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  &:hover {
    cursor: pointer;
    // background: grey;
  }
`;

export const StyledText = styled.span`
  font-size: 15px;
  font-weight: bold;
`;
export const StyledCheckBox = styled.input`
  -webkit-appearance: none;
  background-color: #fafafa;
  border: 1px solid #cacece;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
  padding: 12px !important;
  border-radius: 3px;
  display: inline-block;
  position: relative;
  outline: none;
  margin: 5px;
  &:checked {
    background-color: #e9ecee;
    border: 1px solid #adb8c0;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05),
      inset 15px 10px -12px rgba(255, 255, 255, 0.1);
    color: #99a1a7;
  }
  &:checked:active {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px 1px 3px rgba(0, 0, 0, 0.1);
  }
  &:checked:after {
    content: "\\2714";
    font-size: 20px;
    position: absolute;
    top: -2px;
    left: 4px;
    color: #33ca47;
  }
`;
