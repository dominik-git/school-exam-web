import React from "react";
import { StyledFotoWrapper, StyledPhoto, StyledDeleteIcon } from "./styles";

const Photo = props => (
  <StyledFotoWrapper>
    <StyledPhoto src={`data:image;base64,${props.photoFile.data}`} />
    <StyledDeleteIcon
      onClick={() => {
        props.deletePhoto(props.photoFile.id);
      }}
    >
      <i className="fas fa-times" />
    </StyledDeleteIcon>
  </StyledFotoWrapper>
);
export default Photo;
