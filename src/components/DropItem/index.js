import React from "react";
import { StyledImage, StyledWrapper } from "./styles";

class DropItem extends React.Component {
  state = {
    imageUrl: ""
  };
  componentWillMount() {
    this.parseFilesToShowLikeImage(this.props.imageFile);
  }
  parseFilesToShowLikeImage = photo => {
    const reader = new FileReader();
    const imageUrl = "";
    reader.onload = () => {
      this.setState({ imageUrl: reader.result });
    };
    reader.readAsDataURL(photo);
  };
  render() {
    return (
      <StyledWrapper onClick={this.props.deleteItem}>
        <StyledImage src={`${this.state.imageUrl}`} />
      </StyledWrapper>
    );
  }
}
export default DropItem;
