import React from "react";
import { StyledWrapper, StyledIcon } from "./styles.js";

class ScrollTop extends React.Component {
  constructor() {
    super();
    this.state = {
      top: 0,
      isActive: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.pageYOffset > 100) {
      this.setState({ isActive: true });
    } else if (window.pageYOffset < 100) {
      this.setState({ isActive: false });
    }
  };
  handleScrollTop = () => {
    window.scrollTo(0, 0);
  };
  render() {
    return (
      <StyledWrapper isActive={this.state.isActive} onClick={this.handleScrollTop}>
        <StyledIcon className="fas fa-arrow-up" />
      </StyledWrapper>
    );
  }
}
export default ScrollTop;
