import React from "react";
import ImagePicker from "../../../components/ImagePicker/ImagePicker";

class ImagePickerWrapper extends React.Component {
  constructor() {
    super();
    this.state = {
      isEdit: false,
    };
    this.handleEdit = this.handleEdit.bind(this);
  }
  handleEdit() {
    console.log("edit");
    if (this.state.isEdit) {
      this.setState({ isEdit: false });
    } else if (!this.state.isEdit) {
      this.setState({ isEdit: true });
    }
  }
  render() {
    return (
      <App onTransitionEnd={this.transitionEnd} mounted={this.state.showChild} />

    );
  }

}
export default ImagePickerWrapper;