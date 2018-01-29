import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import { getStateSelectedImage } from "../../selectors/priceListSelector";
import EditAbleRow from "./components/TableRow";
import { sucessfulNotification, infoNotification, errorNotification } from "../../services/toastServices";
import { returnAllServicesPromise, returnPromiseCreateNewService, returnPromiseUpdateServiceById, returnPromiseDeleteServiceById } from "../../services/priceListServices";
import CreateNewService from "./components/CreateNewRow";

class AdminPricePage extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      services: [],
      icons: [],
      selectedImage: "",
    };
    this.createNewService = this.createNewService.bind(this);
    this.deleteService = this.deleteService.bind(this);
    this.handleSelectImageFromImagePicker = this.handleSelectImageFromImagePicker.bind(this);
  }
  componentDidMount() {
    this.fetchServices();
    this.initIcons();
  }
  initIcons() {
    this.setState({
      icons: [
        {
          name: "wheel1",
          className: "flaticon-oil",
        },
        {
          name: "air-condition2",
          className: "flaticon-air-conditioning",
        },
        {
          name: "air-condition3",
          className: "flaticon-air-conditioning",
        },
        {
          name: "wheel4",
          className: "flaticon-oil",
        },
        {
          name: "air-condition5",
          className: "flaticon-air-conditioning",
        },
        {
          name: "air-condition6",
          className: "flaticon-air-conditioning",
        }, {
          name: "wheel7",
          className: "flaticon-oil",
        },
        {
          name: "air-condition8",
          className: "flaticon-air-conditioning",
        },
        {
          name: "air-condition9",
          className: "flaticon-air-conditioning",
        },
        {
          name: "close-button"
        }

      ]
    })
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
  // TO ADD add const message to notification
  async createNewService() {
    // const { service, description, price } = values.toJS();
    // try {
    //   await returnPromiseCreateNewService(service, description, price);
    //   this.fetchServices();
    //   sucessfulNotification("PRIDANE");
    console.log(this.props.selectedImage);
    // } catch (err) {
    //   console.log(err);
    // }
  }
  // TO ADD add const message to notification
  async deleteService(id) {
    try {
      await returnPromiseDeleteServiceById(id);
      const newArray = this.state.services.filter(value => value.id !== id);
      this.setState({ services: newArray });
      sucessfulNotification("uspesne vymazane");
    } catch (err) {
      console.log(err);
    }
  }
  handleSelectImageFromImagePicker(className) {
    console.log("className", className);
  }
  // TO ADD add const message to notification
  async updateService(id, service, description, price) {
    try {
      await returnPromiseUpdateServiceById(id, service, description, price);
      sucessfulNotification("UPDATOVANe");
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    console.log(this.props.selectedImage);
    if (this.state.isLoading) {
      return (<div>Loading</div>);
    }

    return (
      <div>
        {/* <table>
          <thead>
            <tr>
              <td>Sluzba</td>
              <td>Popis</td>
              <td>cena</td>
              <td>upravit</td>
              <td className="flaticon-oil">vymazat</td>
            </tr>
          </thead>
          <tbody>
            {this.state.services.map(item => {
              return (
              // <EditAbleRow data={item} key={item.id} updateRow={this.updateService} deleteRow={this.deleteService} />
              )
            })}
          </tbody>
        </table> */}

        {this.state.icons.length > 0 ?
          <CreateNewService
            onSubmit={this.createNewService}
            images={this.state.icons}
            name="wheel"
            className="flaticon-oil"
          /> : null}

        <ToastContainer position="bottom-center" hideProgressBar />
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  selectedImage: getStateSelectedImage(),
});
export default connect(mapStateToProps)(AdminPricePage);
