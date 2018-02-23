import React from "react";
import PropTypes from "prop-types";
import { change } from "redux-form";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { getStateSelectedImage } from "../../selectors/priceListSelector";
import ImagePicker from "./ImagePicker";
import { StyledImagePickerSelect, StyledRightIcon } from "./styles";
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
    console.log("edit");
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
          name: "inspection",
          className: "flaticon-inspection",
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
    console.log(value);
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
    } else if (job === "create") {
      return (
        <div>
          <StyledImagePickerSelect onClick={this.handleEdit}>
            {
              this.state.serviceImage === undefined ? <span>Click and chose picture</span> : <span className={this.state.serviceImage} />
            }
          </StyledImagePickerSelect>
          <ImagePicker
            mounted={this.state.isEdit}
            images={this.state.icons}
            handleSelectImage={this.handleSelectImage}
            form={this.props.form}
          />
        </div>
      );
    }

    return <div>Image Picker</div>;

  }

}

export default ImagePickerWrapper;

ImagePickerWrapper.propTypes = {
  // name: PropTypes.string.isRequired,
  // className: PropTypes.string.isRequired,
  // images: PropTypes.array.isRequired
};