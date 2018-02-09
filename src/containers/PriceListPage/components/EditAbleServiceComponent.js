import React from "react";
import UpdateServiceForm from "./UpdateServiceForm";
// import { StyledWrapper, StyledServiceIcon, StyledServiceName, StyledServiceDesciption, StyledServicePrice, StyledButtonGroup } from "./styles";

class EditAbleServiceComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
    }
    this.handleEditState = this.handleEditState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEditState() {
    const { isEdit } = this.state;
    if (isEdit) {
      this.setState({ isEdit: false });
    } else {
      this.setState({ isEdit: true });
    }
  }
  handleSubmit(values) {
    const { serviceImage, service, description, price } = values.toJS();
    this.props.onSubmit(this.props.data.id, serviceImage, service, description, price);
  }

  render() {
    const { data } = this.props;
    const initialValues = {
      serviceImage: data.serviceImage,
      service: data.service,
      description: data.description,
      price: data.price
    };
    if (this.state.isEdit) {
      return (
        <div>
          <UpdateServiceForm
            serviceImage={data.serviceImage}
            initialValues={initialValues}
            form={`${data.id}`}
            handleDeleteRow
            onSubmit={this.handleSubmit}
          />
          {/* <input value="save" onClick={this.handleSubmit} type="button" /> */}
          <input value="cancel" onClick={this.handleEditState} type="button" />
        </div>
      );
    }
    return (
      <div>
        <div> {data.serviceImage}</div>
        <div> {data.serviceName}</div>
        <div> {data.description}</div>
        <div> {data.price}</div>
        <div>{data.id}</div>
        <div>
          <input value="edit" type="button" onClick={this.handleEditState} />
          {/* <input value="delete" type="button" onClick={this.handleDeleteRow} /> */}
        </div>
      </div>
    );
  }
}

export default EditAbleServiceComponent;