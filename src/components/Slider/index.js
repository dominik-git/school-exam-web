import React from "react";
import NextIcon from "./next.png";
import BackIcon from "./back.png";
import {
  StyledWrapper,
  StyledSlider,
  StyledContent,
  StyledOverlay,
  StyledLeftIcon,
  StyledRightIcon,
  LeftIconWrapper,
  RightIconWrapper,
} from "./styles";

class Slider extends React.Component {
  constructor() {
    super();
    this.state = {
      resizeIcon: false,
    };

    this.handleResizeIcon = this.handleResizeIcon.bind(this);
    this.setResizeToFalse = this.setResizeToFalse.bind(this);
    this.setDelayForState = this.setDelayForState.bind(this);
  }

  setDelayForState() {
    setTimeout(this.setResizeToFalse, 300);
  }
  setResizeToFalse() {
    this.setState({ resizeIcon: false });
  }
  handleResizeIcon() {
    this.setState({ resizeIcon: true }, () => this.setDelayForState());
  }
  render() {
    return (
      <StyledWrapper isSliderShow={this.props.isSliderShow}>
        <StyledOverlay onClick={this.props.closeSlider} />
        <StyledContent>
          {this.props.image}
          <LeftIconWrapper onClick={this.props.moveLeft} isMoveLeftPossible={this.props.isMoveLeftPossible}>
            <StyledLeftIcon src={BackIcon} onClick={this.handleResizeIcon} />
          </LeftIconWrapper>
          <RightIconWrapper onClick={this.props.moveRight} isMoveRightPossible={this.props.isMoveRightPossible}>
            <StyledRightIcon src={NextIcon} />
          </RightIconWrapper>
        </StyledContent>
      </StyledWrapper>
    );
  }
}
export default Slider;
