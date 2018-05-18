import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router";
import {logOut} from "../../actions/roleActions";
import { selectContactDetails } from "../../selectors/contactDetailDataSelector";
import getStateIsAdmin from "../../selectors/roleSelector";
import {
  StyledHeaderWrapper,
  StyledLogoWrapper,
  StyledToogleButton,
  StyledInfoWrapper,
  StyledToogleButtonWrapper,
  StyledNumber,
  StyledEmail,
  StyledIcon,
  StyledIconsWrapper,
  StyledLogo
} from "./styles";
import UserHeader from "./parts/userHeader";
import AdminHeader from "./parts/adminHeader";
import bmwLogo from "../../assets/servis.png";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      isExpand: false,
      isShow: false,
      width: "0",
      height: "0",
    };
    this.setNavExpanded = this.setNavExpanded.bind(this);
    this.closeNav = this.closeNav.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.handleExpand = this.handleExpand.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }
  setNavExpanded() {
    if (this.state.isExpand) {
      this.setState({ isExpand: false });
    } else if (!this.state.isExpand) {
      this.setState({ isExpand: true });
    }
  }
  handleExpand() {
    if (this.state.width < 840) {
      this.setState({
        isShow: true,
        isExpand: false,
      });
    } else if (this.state.width > 840) {
      this.setState({
        isShow: false,
        isExpand: true,
      });
    }
  }
  handleLogOut = () => {
    window.sessionStorage.removeItem("token");
    this.props.logoutAdmin();
  }

  closeNav() {
    this.setState({ navExpanded: false });
  }
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth }, () => {
      this.handleExpand();
    });
    console.log(window.innerWidth);
  }
  render() {
    const toggleIcon = <i className="fa fa-bars fa-2x" aria-hidden="true" />;
    const phoneIcon = <i className="fas fa-mobile-alt fa-2x" aria-hidden="true" />;
    const timeIcon = <i className="far fa-clock fa-2x" aria-hidden="true" />;
    let number1 = ""
    let openTime = ""
    let closeTime = ""
    let openDay = ""
    let closeDay = ""
    let time = ""

    if(this.props.contactDetails){
       number1 = this.props.contactDetails.get("number1");
       openTime = this.props.contactDetails.get("openTime");
       closeTime = this.props.contactDetails.get("closeTime");
       openDay = this.props.contactDetails.get("openDay");
       closeDay = this.props.contactDetails.get("closeDay");
       time = openDay + "-" + closeDay + " " + openTime + "-" + closeTime;
    }
   
    return (
      <StyledHeaderWrapper>
        <StyledInfoWrapper>
          <StyledLogoWrapper>
            <StyledLogo src={bmwLogo} alt="bmwLogo" />
            {/* <StyledLogoText>BAVARIA SERVIS</StyledLogoText> */}
          </StyledLogoWrapper>
           <StyledIconsWrapper>
           <StyledNumber>
             <StyledIcon>{phoneIcon}</StyledIcon>
             {number1}
           </StyledNumber>
           <StyledEmail>
             <StyledIcon>{timeIcon}</StyledIcon>
             {time}
           </StyledEmail>
         </StyledIconsWrapper> 

        </StyledInfoWrapper>
        <StyledToogleButtonWrapper>
          <StyledToogleButton isShow={this.state.isShow} onClick={this.setNavExpanded}>
            {toggleIcon}
          </StyledToogleButton>
        </StyledToogleButtonWrapper>

       {this.props.isAdmin === true ? <AdminHeader isExpand={this.state.isExpand} logout={this.handleLogOut}/> : <UserHeader isExpand={this.state.isExpand}/>}
      </StyledHeaderWrapper>
      )
  }
}
const mapStateToProps = createStructuredSelector({
  contactDetails: selectContactDetails(),
  isAdmin: getStateIsAdmin(),
});

const mapDispatchToProps = dispatch => ({
  logoutAdmin: () => dispatch(logOut()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
