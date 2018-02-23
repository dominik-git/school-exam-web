import React from "react";
import { Row, Col, Grid } from "react-bootstrap";
import { returnAllServicesPromise } from "../../services/priceListServices";
import ServiceItem from "../../components/ServiceItem";
import { StyledTitle, StyledWrapper, StyledRow } from "./styles";
import Loader from "../../components/Loader";
import "./flatIconForUser/flaticon.css";

class AdminPricePage extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      services: [],
    };
  }
  componentDidMount() {
    this.fetchServices();
  }
  async fetchServices() {
    try {
      const response = await returnAllServicesPromise();
      this.setState({
        isLoading: false,
        services: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const serviceItems = this.state.services.map(item => (
      // <Col xs={12} sm={6} md={4} lg={4} xl={4} key={item.id}>
      <ServiceItem key={item.id} item={item} key={item.id} />
      // </Col>
    ));
    if (this.state.isLoading) {
      return (
        <StyledWrapper>
          {" "}
          <Loader />
        </StyledWrapper>
      );
    }
    return (
      <StyledWrapper>
        <StyledTitle>Nase Sluzby</StyledTitle>
        <StyledRow>{serviceItems}</StyledRow>
      </StyledWrapper>
    );
  }
}
export default AdminPricePage;
