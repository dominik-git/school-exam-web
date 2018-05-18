import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import Loader from "../../../components/Loader";
import { returnGetPromise, returnPostPathVariablePromise } from "../../../services/orderServices";
import ExpanedRow from "../../../components/ExpandedRow/index";
const loadArchivedOrdersUrl = "/order/getAllArchivedOrder";
const approveOrderUrl = "api/order/approveOrder/{id}";

class ArchivedOrders extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      isLoading: true,
      isExpand:false,
      selectedRow:null
    };
  }
  componentDidMount() {
    this.loadArchivedOrders();
  }

   loadArchivedOrders = async () => {
     try {
       const response = await returnGetPromise(loadArchivedOrdersUrl);
       this.setState({
         data: response.data,
         isLoading: false,
       });
     } catch (err) {
       console.log(err);
     }
   }
   deleteOrder = async (id) => {
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
          deleteOrder={this.deleteOrder}
          executionText="Archivovat objednavku"
          closeExpand={this.closeExpand}
        />
      );
    }

    return (
      <div>
        <BootstrapTable
          data={this.state.data}
          striped
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
export default ArchivedOrders;
