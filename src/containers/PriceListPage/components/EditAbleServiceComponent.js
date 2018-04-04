import React from "react";
import UpdateServiceForm from "./UpdateServiceForm";
import { StyledWrapper, StyledLabel } from "./styles";
import ServiceItem from "../../../components/ServiceItem";
// import { StyledWrapper, StyledServiceIcon, StyledServiceName, StyledServiceDesciption, StyledServicePrice, StyledButtonGroup } from "./styles";

class EditAbleServiceComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
    };
    this.turnOnEdit = this.turnOnEdit.bind(this);
    this.turnOffEdit = this.turnOffEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  turnOnEdit() {
    this.setState({ isEdit: true });
  }
  turnOffEdit() {
    this.setState({ isEdit: false });
  }
  handleSubmit(values) {
    const { serviceImage, service, description, price } = values.toJS();
    this.props.onSubmit(this.props.data.id, serviceImage, service, description, price);
    this.setState({ isEdit: false });
  }

  render() {
    const { data, onDelete } = this.props;
    const initialValues = {
      serviceImage: data.serviceImage,
      service: data.service,
      description: data.description,
      price: data.price,
    };
    if (this.state.isEdit) {
      return (
        <StyledWrapper>
          <UpdateServiceForm
            serviceImage={data.serviceImage}
            initialValues={initialValues}
            form={`${data.id}`}
            handleDeleteRow
            onSubmit={this.handleSubmit}
            cancel={this.turnOffEdit}
          />
        </StyledWrapper>
      );
    }
    return (
      // <StyledWrapper>
      //   <div>
      //     <StyledLabel>Obrazok sluzby:</StyledLabel>
      //     <div className={data.serviceImage} />
      //   </div>
      //   <div>
      //     <StyledLabel>Nazov sluzby:</StyledLabel>
      //     <div>{data.service}</div>
      //   </div>
      //   <div>
      //     <StyledLabel>Popis sluzby:</StyledLabel>
      //     <div>{data.description} </div>
      //   </div>
      //   <div>
      //     <StyledLabel>Cena sluzby:</StyledLabel>
      //     <div>{data.price} </div>
      //   </div>
      //   <div>
      //     <input value="edit" type="button" onClick={this.handleEditState} />
      //     {/* <input value="delete" type="button" onClick={this.handleDeleteRow} /> */}
      //   </div>
      // </StyledWrapper>

      <ServiceItem item={data} isAdmin edit={this.turnOnEdit} onDelete={onDelete} />
    );
  }
}

export default EditAbleServiceComponent;