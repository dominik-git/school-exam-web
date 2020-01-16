import React from "react";
import { StyledWrapper, StyledContent, ButtonGroup, StyledPhotoRow, StyledLabel, StyledI } from "./styles";
import DropItem from "../DropItem";
import Button from "../Button";
import "./styles.css";

const DragAndDropArea = props => (
  <StyledWrapper
    onDragEnter={props.onDragEnter}
    onDragOver={props.onDragOver}
    onDragLeave={props.onDragLeave}
    onDrop={props.onDrop}
  >
    <StyledContent>
      <StyledI className="far fa-image fa-9x" />
      <input
        type="file"
        id="files"
        accept="image/*"
        encType="multipart/form-data"
        onChange={props.uploadFile}
        style={{ visibility: "hidden" }}
      />
      <span>Pretiahni obrazok z plochy sem </span>
      <span>alebo </span>

      <StyledLabel htmlFor="files">Hladaj</StyledLabel>

      <StyledPhotoRow>
        {props.photoArray.map((item, index) => <DropItem imageFile={item} key={index} />)}
      </StyledPhotoRow>
      <ButtonGroup>
        <Button onClick={props.uploadPhotos} value="Pridat fotky" blue>
          Pridat
        </Button>
        <Button value="Zrusit Pridavanie" grey>
          Zrusit pridavanie
        </Button>
      </ButtonGroup>
    </StyledContent>
  </StyledWrapper>
);

export default DragAndDropArea;
