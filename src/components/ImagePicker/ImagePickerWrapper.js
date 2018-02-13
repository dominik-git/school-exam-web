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
          name: "wheel1",
          className: "flaticon-oil",
        },
        {
          name: "air-condition2",
          className: "flaticon-air-conditioning",
        },
        {
          name: "air-condition3",
          className: "flaticon-air-conditioning",
        },
        {
          name: "wheel4",
          className: "flaticon-oil",
        },
        {
          name: "air-condition5",
          className: "flaticon-air-conditioning",
        },
        {
          name: "air-condition6",
          className: "flaticon-air-conditioning",
        }, {
          name: "wheel7",
          className: "flaticon-oil",
        },
        {
          name: "air-condition8",
          className: "flaticon-air-conditioning",
        },
        {
          name: "air-condition9",
          className: "flaticon-air-conditioning",
        }
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