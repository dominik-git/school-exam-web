import React from "react";
// import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
// import HomePage from "homePage";
import { StyledHeaderWrapper, StyledLogoWrapper, StyledLinkWrapper } from "./styles";

class Header extends React.Component {
  render() {
    const activeStyle = { color: "red" };
    return (
      <StyledHeaderWrapper>
        <StyledLogoWrapper />
        <StyledLinkWrapper>
          <NavLink exact to="/" activeStyle={activeStyle}>
            Uvod
          </NavLink>
          <NavLink to="/autoservice" activeStyle={activeStyle}>
            Autoservis
          </NavLink>
          <NavLink to="/sales" activeStyle={activeStyle}>
            Zlavy
          </NavLink>
          <NavLink to="/galery" activeStyle={activeStyle}>
            Galeria
          </NavLink>
          <NavLink to="/contact" activeStyle={activeStyle}>
            Kontakt
          </NavLink>
          <NavLink to="/review" activeStyle={activeStyle}>
            Recenzie
          </NavLink>
        </StyledLinkWrapper>
      </StyledHeaderWrapper>
    );
  }
}
export default Header;
