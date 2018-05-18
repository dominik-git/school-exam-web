import React from "react";
import { returnAllServicesPromise } from "../../services/priceListServices";
import ServiceItem from "../../components/ServiceItem";
import StyledTitle from "../../components/Title";
import { StyledWrapper, StyledRow, StyledContent } from "./styles";
import Loader from "../../components/Loader";
import "../../assets/flaticons/flaticon.css";

class AdminPricePage extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      services: []
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
        services: response.data
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const serviceItems = this.state.services.map(item => (
      // <Col xs={12} sm={6} md={4} lg={4} xl={4} key={item.id}>
      <ServiceItem key={item.id} item={item} />
      // </Col>
    ));
    if (this.state.isLoading) {
      return (
        <StyledWrapper>
          <Loader />
        </StyledWrapper>
      );
    }
    return (
      <StyledWrapper>
        <StyledContent>
          <StyledTitle>Nase Sluzby</StyledTitle>
          <StyledRow>{serviceItems}</StyledRow>
        </StyledContent>
      </StyledWrapper>
    );
  }
}
export default AdminPricePage;
