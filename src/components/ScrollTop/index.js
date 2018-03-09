import React from "react";

class ScrollTop extends React.Component {
  constructor() {
    super();
    this.state = {
      top: 0,
      isActive: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    console.log("Y", window.pageYOffset);
    //  this.setState({scrollTop: $(window).scrollTop()});
  };
  render() {
    return <div>Scroll up</div>;
  }
}
export default ScrollTop;
