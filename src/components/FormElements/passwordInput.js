import React, { Component } from "react";

import { PasswordWrapper, StyledInput, WrapperPasswordButton, CapsLockMessage } from "./styles";
import Button from "../Button";

class PasswordInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPasswordHidden: true,
      isCapsLockPressed: false,
      isFocused: false
    };
    this.changeStateOfPasswordButton = this.changeStateOfPasswordButton.bind(this);
    this.handleCapsLock = this.handleCapsLock.bind(this);
    this.handleIsFocusedState = this.handleIsFocusedState.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleCapsLock);
    document.addEventListener("keyup", this.handleCapsLock);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleCapsLock);
    document.removeEventListener("keyup", this.handleCapsLock);
  }
  handleCapsLock(event) {
    if (typeof event.getModifierState === "function") {
      const caps = event.getModifierState("CapsLock");
      if (caps) {
        this.setState({ isCapsLockPressed: true });
      } else {
        this.setState({ isCapsLockPressed: false });
      }
    }
  }
  changeStateOfPasswordButton() {
    this.setState({
      isPasswordHidden: !this.state.isPasswordHidden // isPasswordHidden
    });
  }
  handleIsFocusedState() {
    this.setState({ isFocused: true });
  }
  handleOnBlur() {
    this.setState({ isFocused: false });
  }
  render() {
    const controlId = this.context.controlId;
    const { isCapsLockPressed, isFocused, isPasswordHidden } = this.state;
    return (
      <PasswordWrapper>
        <StyledInput
          type={isPasswordHidden ? "password" : "text"}
          {...this.props}
          id={controlId}
          onFocus={this.handleIsFocusedState}
          onBlur={this.handleOnBlur}
        />
        <WrapperPasswordButton>
          <Button info onClick={this.changeStateOfPasswordButton}>
            {isPasswordHidden ? "Show" : "Hide"}
          </Button>
        </WrapperPasswordButton>
        {isFocused && isCapsLockPressed ? <CapsLockMessage>Caps Lock is on</CapsLockMessage> : ""}
      </PasswordWrapper>
    );
  }
}
export default PasswordInput;