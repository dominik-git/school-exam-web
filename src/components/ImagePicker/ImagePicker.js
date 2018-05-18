import React from "react";
import PropTypes from "prop-types";
import Image from "./Image";
import { StyledImagePickerSelect, StyledRightIcon, StyledWrapper } from "./styles";
import "./flaticonForAdmin/flaticon.css";
import "./styles.css";

const ImagePicker = props =>
  (props.mounted ? (
    <StyledWrapper>
      {props.images.map(item => (
        <Image
          className={item.className}
          name={item.name}
          key={item.name}
          handleSelectImage={props.handleSelectImage}
          form={props.form}
        />
      ))}
    </StyledWrapper>
  ) : null);

export default ImagePicker;
