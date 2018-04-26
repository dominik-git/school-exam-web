import React from "react";
import PropTypes from "prop-types";
import { change } from "redux-form";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { getStateSelectedImage } from "../../selectors/priceListSelector";
import ImagePicker from "./ImagePicker";
import { StyledImagePickerSelect, StyledRightIcon, StyledCreateIcon } from "./styles";
import "./flaticonForAdmin/flaticon.css";

class ImagePickerWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      icons: [],
      serviceImage: this.props.serviceImage,
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSelectImage = this.handleSelectImage.bind(this);
  }

  componentWillMount() {
    this.initIcons();
  }
  handleEdit() {
    if (this.state.isEdit) {
      this.setState({ isEdit: false });
    } else if (!this.state.isEdit) {
      this.setState({ isEdit: true });
    }
  }
  initIcons() {
    this.setState({
      icons: [
        {
          name: "inspection",
          className: "flaticon-inspection",
        },
        {
          name: "oil",
          className: "flaticon-oil",
        },
        {
          name: "electrical-service",
          className: "flaticon-electrical-service",
        },
        {
          name: "air-conditioning",
          className: "flaticon-air-conditioning",
        },
        {
          name: "painting",
          className: "flaticon-painting",
        },
        {
          name: "exhaust-pipe",
          className: "flaticon-exhaust-pipe",
        },
        {
          name: "alloy-wheel",
          className: "flaticon-alloy-wheel",
        },
        {
          name: "diagnostic",
          className: "flaticon-diagnostic",
        },
        {
          name: "suspension",
          className: "flaticon-suspension",
        },
        {
          name: "engine",
          className: "flaticon-engine",
        },
        {
          name: "maintenance",
          className: "flaticon-maintenance",
        },
        {
          name: "speedometer",
          className: "flaticon-speedometer",
        },
        {
          name: "reparation",
          className: "flaticon-reparation",
        },
        {
          name: "wheel-alignment",
          className: "flaticon-wheel-alignment",
        },
        {
          name: "battery",
          className: "flaticon-battery",
        },
        {
          name: "disc-brake",
          className: "flaticon-disc-brake",
        },
        {
          name: "mechanic",
          className: "flaticon-mechanic",
        },
      ]
    })
  }
  handleSelectImage(value) {
    this.setState({ serviceImage: value });
    this.handleEdit();
  }
  render() {
    const { job, form } = this.props;
    if (job === "update") {
      return (
        <div>
          <StyledImagePickerSelect onClick={this.handleEdit}>
            <span className={this.state.serviceImage} />
          </StyledImagePickerSelect>
          <ImagePicker
            mounted={this.state.isEdit}
            images={this.state.icons}
            handleEdit={this.handleEdit}
            handleSelectImage={this.handleSelectImage}
            form={form}
          />
        </div>
      );
    }
    return (
      <div>
        <StyledCreateIcon onClick={this.handleEdit}>
          {
          this.state.serviceImage === undefined ? <span>Klikni a vyber obrazok servisneho ukonu</span> : <span className={this.state.serviceImage} />
          }
        </StyledCreateIcon>
        <ImagePicker
          mounted={this.state.isEdit}
          images={this.state.icons}
          handleSelectImage={this.handleSelectImage}
          form={this.props.form}
        />
      </div>
    );
  }

}

export default ImagePickerWrapper;

ImagePickerWrapper.propTypes = {
  job: PropTypes.string,
  form: PropTypes.string.isRequired
};
ImagePickerWrapper.defaultProps = {
  job: "create"
};