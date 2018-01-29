import React from "react";
import PropTypes from "prop-types";
import { ReduxFormInputWithIcon, FormTextAreaWithIcon, FormInput } from "../../../components/FormElements/index";
import { StyledWrapper } from "./styles";


class EditAbleRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      service: this.props.data.service,
      description: this.props.data.description,
      price: this.props.data.price,
    }
    this.handleUpdateRowService = this.handleUpdateRowService.bind(this);
    this.handleUpdateRowDescription = this.handleUpdateRowDescription.bind(this);
    this.handleUpdateRowPrice = this.handleUpdateRowPrice.bind(this);
    this.handleDeleteRow = this.handleDeleteRow.bind(this);
    this.handleEditState = this.handleEditState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // componentDidMount(){
  //   this.setState({service: this.props.data.service});
  // }
  handleEditState() {
    const { isEdit } = this.state;
    if (isEdit) {
      this.setState({ isEdit: false });
    } else {
      this.setState({ isEdit: true });
    }
  }
  handleUpdateRowService(e) {
    this.setState({ service: e.target.value });
  }
  handleUpdateRowDescription(e) {
    this.setState({ description: e.target.value });
  }
  handleUpdateRowPrice(e) {
    this.setState({ price: e.target.value });
  }
  handleDeleteRow() {
    console.log("delete row");
    this.props.deleteRow(this.props.data.id);
  }
  handleSubmit() {
    const { data } = this.props;
    const { service, description, price } = this.state;
    this.props.updateRow(data.id, service, description, price);
  }
  render() {
    const { data } = this.props;
    if (this.state.isEdit) {
      return (
        <tr>
          <td><input value={this.state.service} type="text" onChange={(e) => { this.handleUpdateRowService(e) }} /></td>
          <td><input value={this.state.description} type="text" onChange={(e) => { this.handleUpdateRowDescription(e) }} /></td>
          <td><input value={this.state.price} type="text" onChange={(e) => { this.handleUpdateRowPrice(e) }} /></td>
          <td>
            <input value="update" onClick={this.handleSubmit} type="button" />
            <input value="delete" onClick={this.handleDeleteRow} type="button" />
            <input value="cancel" onClick={this.handleEditState} type="button" />
          </td>

        </tr>
      );
    }
    return (
      <StyledWrapper>
        <span> {data.service}</span>
        <span> {data.description}</span>
        <span> {data.price}</span>
        <div>
          <input value="edit" type="button" onClick={this.handleEditState} />
        </div>
      </StyledWrapper>
    );
  }
}

// create new, "configured" function
export default EditAbleRow;