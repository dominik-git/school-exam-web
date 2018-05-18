import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import Loader from "../../../components/Loader";
import { returnGetPromise, returnPostPathVariablePromise } from "../../../services/orderServices";
import ExpanedRow from "../../../components/ExpandedRow/index";
import { sucessfulNotification, infoNotification, errorNotification } from "../../../services/toastServices";
import { Row } from "react-flexbox-grid";

class NewOrders extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      isLoading: true,
      isExpand:false,
      selectedRow:null
    };
    this.approveOrder = this.approveOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    
  }
  componentDidMount() {
    this.loadNewOrders();
  }

  async loadNewOrders() {
    try {
      const response = await returnGetPromise("/order/getAllNewOrders");
      this.setState({
        data: response.data,
        isLoading: false,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async approveOrder(id) {
    try {
      await returnPostPathVariablePromise(`/order/approveOrder/${id}`);
      this.setState({data: this.state.data.filter(value => value.id !== id)});
      sucessfulNotification("Objednavka bola schvalena");
      this.closeExpand();
    } catch (err) {
      console.log(err);
    }
  }
  async deleteOrder(id) {
    try {
      await returnPostPathVariablePromise(`/order/deleteOrder/${id}`);
      this.setState({data: this.state.data.filter(value => value.id !== id)});
      this.closeExpand();
    } catch (err) {
      console.log(err);
    }
  }


  closeExpand = () => {
    this.setState({
      isExpand: false,
      selectedRow:null
    });
  };
  handleExpandComponent=(row)=> {
    this.setState({
      selectedRow:row,
      isExpand: true 
    })
    console.log(row);
  }

  render() {
    const options = {
      sizePerPageList: [{ text: "5", value: 5 }, { text: "10", value: 10 }],
      onRowClick: this.handleExpandComponent 
    };

    if (this.state.isLoading) {
      return <Loader />;
    }
    if (this.state.isExpand) {
      return (
        <ExpanedRow
          row={this.state.selectedRow}
          executionFunction={this.approveOrder}
          deleteOrder={this.deleteOrder}
          executionText="Potvrdit objednavku"
          closeExpand={this.closeExpand}
        />
      );
    }

    return (
      <div>
        <BootstrapTable
          data={this.state.data}
          pagination
          options={options}
        >
          <TableHeaderColumn isKey dataField="id">
            Id objednavky
          </TableHeaderColumn>
          <TableHeaderColumn dataField="name">Meno</TableHeaderColumn>
          <TableHeaderColumn dataField="surname">Priezvisko</TableHeaderColumn>
          <TableHeaderColumn dataField="emailAddress">E-mailova Adresa</TableHeaderColumn>
          <TableHeaderColumn dataField="phoneNumber">Tel. cislo</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
export default NewOrders;
