import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { StyledMenuWrapper, StyledWrapper, StyledNavLink } from "./styles";
import NewOrders from "./adminComponents/newOrders";
import ArchivedOrders from "./adminComponents/archiveOfOrders";
import ApprovedOrders from "./adminComponents/approvedOrders";
import "./styles.css";

class AdminOrderPage extends React.Component {
  constructor() {
    super();
    this.state = {
      isRendered: true
    };
  }

  render() {
    const { match } = this.props;
    return (
      <StyledWrapper>
        <StyledMenuWrapper>
          <StyledNavLink to={`${match.url}/newOrders`}>Nove Objednavky</StyledNavLink>
          <StyledNavLink to={`${match.url}/approvedOrders`}>Potvrdene objednavky</StyledNavLink>
          <StyledNavLink to={`${match.url}/archiveOfOrders`}>Archiv objednavok</StyledNavLink>
        </StyledMenuWrapper>
        <Switch>
          <Route path={`${match.url}/newOrders`} component={NewOrders} />
          <Route path={`${match.url}/approvedOrders`} component={ApprovedOrders} />
          <Route path={`${match.url}/archiveOfOrders`} component={ArchivedOrders} />
        </Switch>
      </StyledWrapper>
    );
  }
}
export default withRouter(AdminOrderPage);
