import React from "react";
import { Field } from "redux-form/immutable";
import { StyledWrapper, StyledLabel, StyledText, StyledCheckBox } from "./styles";

const Checkbox = ({ orderItem, input, name, hadndleClick, isChecked }) => (
  <StyledWrapper isChecked={isChecked}>
   <StyledText>{orderItem.service}</StyledText>
    <StyledLabel htmlFor={name} className={orderItem.serviceImage}>
     
      <StyledCheckBox type="checkbox" {...input} onChange={hadndleClick} checked={isChecked} />
    </StyledLabel>
  </StyledWrapper>
);
class ServiceOrderItem extends React.Component {
  state = {
    checked: false
  };
  handleCheckBoxClick = () => {
    this.setState({ checked: !this.state.checked });
  };
  render() {
    const { item } = this.props;
    return (
      <div>
        <Field
          name={`${item.id}`}
          id={item.id}
          component={Checkbox}
          orderItem={item}
          isChecked={this.state.checked}
          hadndleClick={this.handleCheckBoxClick}
        />
      </div>
    );
  }
}

export default ServiceOrderItem;
