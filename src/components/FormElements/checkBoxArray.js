import React from "react";
import { Field } from "redux-form/immutable";

// import { StyledFormLabel, StyledFormGroupWrapper } from "./styles";

const CheckBoxArray = ({ options }) =>
  options.map(option => (
    <div key={option.name}>
      <div>
        <div>{option.name}</div>
        <Field name={option.name} id={option.name} component="input" type="checkbox" />
      </div>
    </div>
  ));

export default CheckBoxArray;
