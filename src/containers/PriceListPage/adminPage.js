import React from "react";
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
import { StyledWrapper,StyledServicesWrapper,StyledIcon, StyledFormOverlay,StyledIconWrapper } from "./styles";


class AdminPricePage extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      services: [],
      selectedImage: "",
      edit:false,
    };
    this.createNewService = this.createNewService.bind(this);
    this.deleteService = this.deleteService.bind(this);
    this.updateService = this.updateService.bind(this);
    this.turnOnEdit = this.turnOnEdit.bind(this);
    this.turnOffEdit = this.turnOffEdit.bind(this);
  }
  componentDidMount() {
    this.fetchServices();
  }

  turnOnEdit() {
    this.setState({ edit: true });
  }
  turnOffEdit() {
    this.setState({ edit: false });
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
  // TO ADD add const message to notification
  async createNewService(values) {
    const { serviceImage, service, description, price } = values.toJS();
    try {
      await returnPromiseCreateNewService(serviceImage, service, description, price);
      this.fetchServices();
      sucessfulNotification("Nova sluzba bola pridana");
      this.turnOffEdit();
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
      sucessfulNotification("UPDATED");
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
    if (this.state.edit) {
      return (
        <StyledFormOverlay>
          <CreateNewServiceForm onSubmit={this.createNewService} onCancel={this.turnOffEdit}/>
        </StyledFormOverlay>
      );
    }
    return (
      <StyledWrapper>
        <StyledIconWrapper>
          <StyledIcon className ="fas fa-plus-circle fa-3x" onClick={this.turnOnEdit}/>
          <div>Pridat novu sluzbu</div>
        </StyledIconWrapper>
        
        <StyledServicesWrapper>
          {this.state.services.map(item => {
            return (
              <EditAbleServiceComponent
                data={item}
                key={item.id}
                onSubmit={this.updateService}
                onDelete={this.deleteService}
              />
            );
          })}
        </StyledServicesWrapper>
      </StyledWrapper>
    );
  }
}

export default AdminPricePage;
