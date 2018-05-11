import React from "react";
import { ButtonToolbar } from "react-bootstrap";
import PropTypes from "prop-types";
import {
  StyledWrapper,
  StyledContent,
  StyledRow,
  StyledDetailTitle,
  StyledFormOverlay,
  StyledOrderHeader,
  StyledOrderContext,
  StyledClose
} from "./styles";
import Button from "../../components/Button";

const ExpanedRow = props => {
  const { executionFunction, executionText, deleteOrder, row, closeExpand } = props;
  return (
    <StyledFormOverlay>
      <StyledWrapper>
        <StyledDetailTitle>Detail objednavky</StyledDetailTitle>
        <StyledContent>
          <StyledRow>
            <StyledOrderHeader >Meno:</StyledOrderHeader>
            <StyledOrderContext>{row.name}</StyledOrderContext>
          </StyledRow>
          <StyledRow>
            <StyledOrderHeader>Priezvisko:</StyledOrderHeader>
            <StyledOrderContext>{row.surname}</StyledOrderContext>
          </StyledRow>
          <StyledRow>
            <StyledOrderHeader>Tel. cislo:</StyledOrderHeader>
            <StyledOrderContext>{row.phoneNumber}</StyledOrderContext>
          </StyledRow>
          <StyledRow>
            <StyledOrderHeader>Emailova adresa:</StyledOrderHeader>
            <StyledOrderContext>{row.emailAddress}</StyledOrderContext>
          </StyledRow>
          <StyledRow>
            <StyledOrderHeader>Znacka auta:</StyledOrderHeader>
            <StyledOrderContext>{row.carBrand}</StyledOrderContext>
          </StyledRow>
          <StyledRow>
            <StyledOrderHeader>Model auta:</StyledOrderHeader>
            <StyledOrderContext>{row.carModel}</StyledOrderContext>
          </StyledRow>
          <StyledRow>
            <StyledOrderHeader>Rok vyroby:</StyledOrderHeader>
            <StyledOrderContext>{row.yearOfMade}</StyledOrderContext>
          </StyledRow>
          <StyledRow>
            <StyledOrderHeader>Popis zavady:</StyledOrderHeader>
            <StyledOrderContext>{row.problemDescription}</StyledOrderContext>
          </StyledRow>
          <StyledRow>
            <StyledOrderHeader>Pozadovane servisne ukony:</StyledOrderHeader>
           { row.serviceItemNames !== undefined ? row.serviceItemNames.map((service,index) =>(
            <StyledOrderContext key={index}>{service}</StyledOrderContext>
           )) : null}
          </StyledRow>
          <div>
          {executionFunction !== undefined ? (
            <Button blue onClick={() => executionFunction(row.id)}>
              {executionText}
            </Button>
          ):null}
          {deleteOrder !== undefined ?  (
            <Button grey onClick={() => deleteOrder(row.orderId)}>
              Vymazat objednavku
            </Button>
          ): null}
          
      </div>
        </StyledContent>
     <StyledClose onClick={closeExpand}>X</StyledClose>
      </StyledWrapper>
    </StyledFormOverlay>
  );
};
 
ExpanedRow.propTypes = {
  row: PropTypes.shape({
    serviceItemNames: PropTypes.arrayOf(PropTypes.string)
  })
};
ExpanedRow.defaultProps = {
  row: {
    serviceItemNames:[]
  },
}

export default ExpanedRow;
