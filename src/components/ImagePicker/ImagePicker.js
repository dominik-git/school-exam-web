import React from "react";
import PropTypes from "prop-types";
import Image from "./Image";
import { StyledImagePickerSelect, StyledRightIcon, StyledWrapper } from "./styles";
import "./flaticonForAdmin/flaticon.css";
import "./styles.css";

class ImagePicker extends React.Component {
  constructor(props) {
    super(props)
    this.transitionEnd = this.transitionEnd.bind(this)
    this.mountStyle = this.mountStyle.bind(this)
    this.unMountStyle = this.unMountStyle.bind(this)
    this.state = { //base css
      show: false,
      style: {
        top: "-50px",
        opacity: 0,
        transition: 'all 1s ease',
      }
    }
  }
  componentWillReceiveProps(newProps) { //check for the mounted props
    console.log("new props");
    if (newProps.mounted === false) {
      return this.unMountStyle(); //call outro animation when mounted prop is false
    }
    if (newProps.mounted) {
      this.setState({ //remount the node when the mounted prop is true
        show: true
      });
      return setTimeout(this.mountStyle, 10);  //call the into animiation
    }
  }

  unMountStyle() {
    this.setState({
      style: {
        top: "-50px",
        opacity: 0,
        transition: 'all 1s linear',
      }
    })
  }

  mountStyle() {
    this.setState({
      style: {
        top: "0px",

        opacity: 1,
        transition: 'all 1s linear',
      }
    })
  }


  transitionEnd() {
    if (this.props.mounted === false) { //remove the node on transition end when the mounted prop is false
      this.setState({
        show: false
      });
    }
  }

  render() {
    console.log(this.props.form);
    return (
      this.state.show ?
        <StyledWrapper onTransitionEnd={this.transitionEnd} style={this.state.style}>
          {
            this.props.images.map(item => (
              <Image
                className={item.className}
                name={item.name}
                key={item.name}
                handleEdit={this.props.handleEdit}
                handleSelectImage={this.props.handleSelectImage}
                form={this.props.form}
              />
            ))
          }
        </StyledWrapper> : null

    );


  }
};
export default ImagePicker;

ImagePicker.propTypes = {
  // name: PropTypes.string.isRequired,
  // className: PropTypes.string.isRequired,
  // images: PropTypes.array.isRequired
};