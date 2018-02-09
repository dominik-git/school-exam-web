import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createStructuredSelector } from "reselect";
import { resetImagePicker } from "../../actions/priceListAction";
import { getStateSelectedImage } from "../../selectors/priceListSelector";
import ImagePickerWrapper from "../ImagePicker/ImagePickerWrapper";
import { StyledWrapper, StyledServiceIcon, StyledServiceName, StyledServiceDesciption, StyledServicePrice, StyledButtonGroup } from "./styles";

class EditAbleServiceComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
    }
    this.handleEditState = this.handleEditState.bind(this);
  }

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
  // handleSubmit() {
  //   const { data } = this.props;
  //   const { selectedImage, service, description, price } = this.state;
  //   if (this.props.selectedImage === undefined) {
  //     this.props.updateRow(data.id, selectedImage, service, description, price);
  //   } else {
  //     this.props.updateRow(data.id, this.props.selectedImage, service, description, price);
  //   }
  //   this.props.resetImagePicker();
  // }
  render() {
    const { data } = this.props;
    console.log(data);
    if (this.state.isEdit) {
      return (
        <div>

          <input value="save" onClick={this.handleSubmit} type="button" />
          <input value="cancel" onClick={this.handleEditState} type="button" />
        </div>

        </div >
      );
    }
    return (
      <StyledWrapper>
        <StyledServiceIcon> {data.serviceImage}</StyledServiceIcon>
        <StyledServiceName> {data.serviceName}</StyledServiceName>
        <StyledServiceDesciption> {data.description}</StyledServiceDesciption>
        <StyledServicePrice> {data.price}</StyledServicePrice>
        <StyledButtonGroup>
          <input value="edit" type="button" onClick={this.handleEditState} />
          <input value="delete" type="button" onClick={this.handleDeleteRow} />
        </StyledButtonGroup>
      </StyledWrapper>
    );
  }
}


const mapStateToProps = createStructuredSelector({
  selectedImage: getStateSelectedImage(),
});
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ resetImagePicker }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditAbleServiceComponent);