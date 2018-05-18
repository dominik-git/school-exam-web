import React from "react";
import { FormGroup, ControlLabel, HelpBlock, Label } from "react-bootstrap";

const CheckboxGroup = ({ label, required, name, options, input, meta }) => (
  <FormGroup controlId={name}>
    {options.map((option, index) => (
      <div className="checkbox" key={option.label}>
        <label>
          <input
            type="checkbox"
            name={`${name}[${index}]`}
            value={option.value}
            checked={input.value.includes(option.value)}
            onChange={event => {
              const newValue = [...input.value];
              console.log("inputs values", ...input.value);
              if (event.target.checked) {
                console.log("is checked", event.target.checked);
                newValue.push(option.value);
              } else {
                newValue.splice(newValue.indexOf(option.value), 1);
              }
              console.log(newValue);

              return input.onChange(newValue);
            }}
          />
          {option.label}
        </label>
      </div>
    ))}
  </FormGroup>
);

export default CheckboxGroup;
