import React from "react";
import { ButtonToolbar } from "react-bootstrap";
import {
  StyledWrapper,
  StyledTable,
  StyledTableHeader,
  TableHeaderCell,
  TableHeaderRow,
  TableBody,
  TableBodyRow,
  TableBodyCell,
  StyledDetailTitle,
  StyledTableWrapper,
} from "./styles";
import Button from "../../components/Button";

const ExpanedRow = props => {
  const {
    carBrand,
    carModel,
    problemDescription,
    serviceName,
    time,
    yearOfMade,
    orderId,
    executionFunction,
    executionText,
    deleteOrder,
  } = props;
  return (
    <StyledWrapper >
      <StyledDetailTitle>Detail objednavky</StyledDetailTitle>
      <StyledTableWrapper>
        <StyledTable>
          <StyledTableHeader>
            <TableHeaderRow>
              <TableHeaderCell>Znacka auta</TableHeaderCell>
              <TableHeaderCell>Model auta</TableHeaderCell>
              <TableHeaderCell>Rok vyroby</TableHeaderCell>
              <TableHeaderCell>Popis zavady</TableHeaderCell>
              <TableHeaderCell>Orientacny cas</TableHeaderCell>
              <TableHeaderCell>Potrebna sluzba</TableHeaderCell>
            </TableHeaderRow>
          </StyledTableHeader>
          <TableBody>
            <TableBodyRow>
              <TableBodyCell>{carBrand}</TableBodyCell>
              <TableBodyCell>{carModel}</TableBodyCell>
              <TableBodyCell>{yearOfMade}</TableBodyCell>
              <TableBodyCell>{problemDescription}</TableBodyCell>
              <TableBodyCell>{time}</TableBodyCell>
              <TableBodyCell>{serviceName}</TableBodyCell>
            </TableBodyRow>
          </TableBody>
        </StyledTable>
      </StyledTableWrapper>
      <ButtonToolbar style={{ float: "left", marginTop: "50px" }}>
        {executionFunction === undefined ? null : (
          <Button blue onClick={() => executionFunction(orderId)}>
            {executionText}
          </Button>
        )}
        {deleteOrder === undefined ? null : (
          <Button grey onClick={() => deleteOrder(orderId)}>
            Vymazat objednavku
          </Button>
        )}
      </ButtonToolbar>

      {/* <div onClick={() => executionFunction(orderId)}>{executionText}</div> */}
    </StyledWrapper>
  );
};
export default ExpanedRow;
