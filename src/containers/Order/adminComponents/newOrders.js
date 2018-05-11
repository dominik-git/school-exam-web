import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import Loader from "../../../components/Loader";
import { returnGetPromise, returnPostPathVariablePromise } from "../../../services/orderServices";
import ExpanedRow from "../../../components/ExpandedRow/index";
import { sucessfulNotification, infoNotification, errorNotification } from "../../../services/toastServices";

class NewOrders extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      isLoading: true,
      isExpand:true
    };
    this.approveOrder = this.approveOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    
  }
  componentDidMount() {
    this.loadNewOrders();
  }

  async loadNewOrders() {
    try {
      const response = await returnGetPromise("/api/order/getAllNewOrders");
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
      await returnPostPathVariablePromise(`/api/order/approveOrder/${id}`);
      this.setState({data: this.state.data.filter(value => value.id !== id)});
      sucessfulNotification("Objednavka bola schvalena");
    } catch (err) {
      console.log(err);
    }
  }
  async deleteOrder(id) {
    try {
      await returnPostPathVariablePromise(`/api/order/deleteOrder/${id}`);
      this.setState({data: this.state.data.filter(value => value.id !== id)});
    } catch (err) {
      console.log(err);
    }
  }

  isExpandableRow = () => {
    return this.state.isExpand;
  };

  closeExpand = () => {
    this.setState({ isExpand: false });
 
    console.log("click");
  };
  showExpand = () => {
    this.setState({ isExpand: true });
 
    console.log("click");
  };
  expandComponent=(row)=> {
    return (
      <ExpanedRow
   
        row={row}
        executionFunction={this.approveOrder}
        deleteOrder={this.deleteOrder}
        executionText="Potvrdit objednavku"
        closeExpand={this.closeExpand}
       
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
export default NewOrders;
