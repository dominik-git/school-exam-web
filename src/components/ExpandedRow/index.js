import React from "react";
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

const ExpanedRow = props => {
  const { carBrand, carModel, problemDescription, serviceName, time, yearOfMade } = props;
  return (
    <StyledWrapper>
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
    </StyledWrapper>
  );
};
export default ExpanedRow;
