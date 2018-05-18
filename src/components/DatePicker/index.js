import React from "react";
import DatePicker from "react-date-picker";
import uniqueId from "lodash/uniqueId";
import { StyledFormLabel } from "./styles";
import moment from "moment";

class MyDatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(date) {
    this.setState({ date });
  }

  render() {
    const { input, label } = this.props;
    return (
      <div controlid={uniqueId(`${input.name}`)}>
        <StyledFormLabel htmlFor={`${input.name}`}>{label}</StyledFormLabel>
        <DatePicker
          onChange={this.handleChange}
          value={this.state.date}
          format="DD/MM/YYYY"
          locale="sk-SK"
          {...input}
        />
      </div>
    );
  }
}
export default MyDatePicker;
