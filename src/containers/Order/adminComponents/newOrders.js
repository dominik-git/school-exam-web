import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import Loader from "../../../components/Loader";
import { returnGetPromise, returnPostPathVariablePromise } from "../../../services/orderServices";
import ExpanedRow from "../../../components/ExpandedRow/index";

const loadNewordersUrl = "/api/order/getAllNewOrders";
const approveOrderUrl = "api/order/approveOrder/{id}";
class NewOrders extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      isLoading: true,
    };
  }
  componentDidMount() {
    this.loadNewOrders();
  }

  async loadNewOrders() {
    try {
      const response = await returnGetPromise(loadNewordersUrl);
      this.setState({
        data: response.data,
        isLoading: false,
      });
    } catch (err) {
      console.log(err);
    }
  }

  isExpandableRow(row) {
    return true;
  }
  expandComponent(row) {
    return (
      <ExpanedRow 
      carBrand={row.carBrand} 
      carModel={row.carModel}
      problemDescription={row.problemDescription}
      serviceName={row.serviceName}
       time={row.time} 
       yearOfMade={row.yearOfMade}
       />
    );
  }

  render() {
    const options = {
      sizePerPageList: [{ text: "5", value: 5 }, { text: "10", value: 10 }],
    };

    if (this.state.isLoading) {
      return <Loader />;
    }
    if (this.state.isLoading && !this.state.data.length) {
      return <span>Ziadne nove objednavky</span>;
    }

    return (
      <div>
        <BootstrapTable
          data={this.state.data}
          striped
          pagination
          options={options}
          expandableRow={this.isExpandableRow}
          expandComponent={this.expandComponent}
        >
          <TableHeaderColumn isKey dataField="id">
            Id objednavky
          </TableHeaderColumn>
          <TableHeaderColumn dataField="name">Meno</TableHeaderColumn>
          <TableHeaderColumn dataField="surname">Priezvisko</TableHeaderColumn>
          <TableHeaderColumn dataField="emailAddress">E-mailova Adresa</TableHeaderColumn>
          <TableHeaderColumn dataField="phoneNumber">Tel. cislo</TableHeaderColumn>
          {/* <TableHeaderColumn dataField="carBrand">Znacka auta</TableHeaderColumn>
          <TableHeaderColumn dataField="carModel">Model auta</TableHeaderColumn>
          <TableHeaderColumn dataField="yearOfMade">Model auta</TableHeaderColumn>
          <TableHeaderColumn dataField="problemDescription">Zavada</TableHeaderColumn>
          <TableHeaderColumn dataField="serviceName">Pozadovana sluzba</TableHeaderColumn>
          <TableHeaderColumn dataField="time" dataSort>
            Orientacny cas
          </TableHeaderColumn> */}
        </BootstrapTable>
      </div>
    );
  }
}
export default NewOrders;
