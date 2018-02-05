import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import { getStateSelectedImage } from "../../selectors/priceListSelector";
import UpdateServiceForm from "./components/UpdateServiceForm";
import CreateNewServiceForm from "./components/CreateNewServiceForm";
import EditAbleServiceComponent from "./components/EditAbleServiceComponent";
import { sucessfulNotification, infoNotification, errorNotification } from "../../services/toastServices";
import {
  returnAllServicesPromise,
  returnPromiseCreateNewService,
  returnPromiseUpdateServiceById,
  returnPromiseDeleteServiceById
} from "../../services/priceListServices";


class AdminPricePage extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      services: [],
      selectedImage: "",
    };
    this.createNewService = this.createNewService.bind(this);
    this.deleteService = this.deleteService.bind(this);
    this.updateService = this.updateService.bind(this);
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
  // TO ADD add const message to notification
  async createNewService(values) {
    const { serviceImage, service, description, price } = values.toJS();
    // const serviceImage = this.props.selectedImage;
    try {
      await returnPromiseCreateNewService(serviceImage, service, description, price);
      this.fetchServices();
      sucessfulNotification("PRIDANE");
    } catch (err) {
      errorNotification("chyba");
      console.log(err);
    }
  }
  // TO ADD add const message to notification
  async deleteService(id) {
    try {
      await returnPromiseDeleteServiceById(id);
      const newArray = this.state.services.filter(value => value.id !== id);
      this.setState({ services: newArray });
      sucessfulNotification("uspesne vymazane");
    } catch (err) {
      errorNotification("chyba");
      console.log(err);
    }
  }

  // TO ADD add const message to notification
  async updateService(id, serviceImage, service, description, price) {
    try {
      await returnPromiseUpdateServiceById(id, serviceImage, service, description, price);
      sucessfulNotification("UPDATOVANe");
      this.fetchServices();
    } catch (err) {
      errorNotification("chyba");
      console.log(err);
    }
  }
  render() {
    if (this.state.isLoading) {
      return (<div>Loading</div>);
    }

    return (
      <div>
        {this.state.services.map(item => {
          return (
            <EditAbleServiceComponent
              data={item}
              key={item.id}
              onSubmit={this.updateService}
            />
            // <UpdateServiceForm
            //   data={item}
            //   key={item.id}
            //   updateRow={this.updateService}
            //   deleteRow={this.deleteService}
            //   initialValues={initialValues}
            //   form={item.service}
            // />
          );
        })}

        <CreateNewServiceForm
          onSubmit={this.createNewService}
          name="wheel"
          className="flaticon-oil"
        />

        <ToastContainer position="bottom-center" hideProgressBar />
      </div>
    )
  }
}

// const mapStateToProps = createStructuredSelector({
//   selectedImage: getStateSelectedImage(),
// });

export default AdminPricePage;
