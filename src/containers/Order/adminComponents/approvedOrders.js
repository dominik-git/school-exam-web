import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import Loader from "../../../components/Loader";
import { returnGetPromise, returnPostPathVariablePromise } from "../../../services/orderServices";
import ExpanedRow from "../../../components/ExpandedRow/index";

class ApprovedOrders extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      isLoading: true,
    };
    this.expandComponent = this.expandComponent.bind(this);
    this.archiveOrder = this.archiveOrder.bind(this);
  }
  componentDidMount() {
    this.loadNewOrders();
  }

  async loadNewOrders() {
    try {
      const response = await returnGetPromise("/api/order/getAllApprovedOrder");
      this.setState({
        data: response.data,
        isLoading: false,
      });
    } catch (err) {
      console.log(err);
    }
  }
  async archiveOrder(id) {
    console.log("id",id);
    try {
      await returnPostPathVariablePromise(`/api/order/archiveOrder/${id}`);
      this.setState({data: this.state.data.filter(value => value.id !== id)});
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
       orderId={row.id}
       executionFunction={this.archiveOrder}
       executionText="Archivovat objednavku"
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
        </BootstrapTable>
      </div>
    );
  }
}
export default ApprovedOrders;
