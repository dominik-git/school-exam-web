import React from "react";
import { StyledNavLink, StyledMenuWrapper, StyledMenu } from "../styles";

const activeStyle = { background: "#253993" };
const UserHeader = ({ isExpand }) => (
  <StyledMenuWrapper>
    <StyledMenu isExpand>
      <StyledNavLink exact to="/" activeStyle={activeStyle}>
        Domov
      </StyledNavLink>
      <StyledNavLink to="/services" activeStyle={activeStyle}>
        Sluzby
      </StyledNavLink>
      <StyledNavLink to="/orders" activeStyle={activeStyle}>
        Objednat sa
      </StyledNavLink>
      <StyledNavLink to="/galery" activeStyle={activeStyle}>
        Galeria
      </StyledNavLink>
      <StyledNavLink to="/contact" activeStyle={activeStyle}>
        Kontakt
      </StyledNavLink>
      <StyledNavLink to="/review" activeStyle={activeStyle}>
        Recenzie
      </StyledNavLink>
    </StyledMenu>
  </StyledMenuWrapper>
);

export default UserHeader;
