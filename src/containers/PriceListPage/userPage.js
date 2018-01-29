import React from "react";
import EditAbleRow from "./components/TableRow";
import { ToastContainer } from "react-toastify";
import { toastForGalleryPage } from "../../const/toastMessages";
import { sucessfulNotification, infoNotification, errorNotification } from "../../services/toastServices";
import { returnAllServicesPromise } from "../../services/priceListServices";
import CreateNewService from "./components/CreateNewRow";
import { StyledRow, StyledCell } from "./styles";


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
      console.log(response.data);
      this.setState({
        isLoading: false,
        services: response.data
      });
    } catch (err) {
      console.log(err);
    }
  }


  render() {
    const tableRows = this.state.services.map(item => (
      <StyledRow key={item.id}>
        <StyledCell>{item.service}</StyledCell>
        <StyledCell>{item.description}</StyledCell>
        <StyledCell>{item.price}</StyledCell>
      </StyledRow>
    ));
    if (this.state.isLoading) {
      return (<div>Loading</div>);
    }
    if (this.state.services === undefined) {
      return (
        <div>
          Ziadne sluzby add neww
      </div>);
    }
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>Sluzba</td>
              <td>Popis</td>
              <td>cena</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {tableRows}
          </tbody>
        </table>
        <ToastContainer position="bottom-center" hideProgressBar />

      </div>
    )
  }
}
export default AdminPricePage;