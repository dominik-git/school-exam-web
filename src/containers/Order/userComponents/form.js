import React from "react";
import { Field, reduxForm, reset } from "redux-form/immutable";
// import DatePicker from "react-datepicker";
// import PropTypes from "prop-types";
import { FormInput } from "../../../components/FormElements/index";
import Button from "../../../components/Button";
import { StyledOrderField, StyledFormWrapper,StyledRow,StyledHidenInput } from "../styles";
// import "react-datepicker/dist/react-datepicker.css";
import MyDatePicker from "../../../components/DatePicker";

const OrderForm = props => {
  const { handleSubmit, handleChange,date } = props;

  return (
    <StyledFormWrapper>
      <form onSubmit={handleSubmit}>
        <h2>Osobne informacie</h2>
        <StyledRow>
          <StyledOrderField>
            <Field name="name" label="Meno" component={FormInput} type="text" border />
          </StyledOrderField>
          <StyledOrderField>
            <Field name="surname" label="Priezvisko" component={FormInput} type="text" border />
          </StyledOrderField>
        </StyledRow>

        <StyledRow>
          <StyledOrderField>
            <Field name="emailAddress" label="E-mailova adresa" component={FormInput} type="email" border />
          </StyledOrderField>
          <StyledOrderField>
            <Field name="phoneNumber" label="Telefonne cislo" component={FormInput} type="text" border />
          </StyledOrderField>
        </StyledRow>
        
        <h2>Udaje o vozidle</h2>
        <StyledRow>
          <StyledOrderField>
            <Field name="serviceName" label="Pozadovany servisny ukon" component={FormInput} type="text" border />
          </StyledOrderField>
          <StyledOrderField>
            <Field name="problemDescription" label="Popis zavady" component={FormInput} type="text" border />
          </StyledOrderField>
        </StyledRow>

        <StyledRow>
          <StyledOrderField>
            <Field name="carBrand" label="Znacka auta" component={FormInput} type="text" border />
          </StyledOrderField>
          <StyledOrderField>
            <Field name="carModel" label="Model auta" component={FormInput} type="text" border />
          </StyledOrderField>
        </StyledRow>

        <StyledRow>
          <StyledOrderField>
            <Field name="yearOfMade" label="Rok vyroby" component={FormInput} type="text" border />
          </StyledOrderField>
          <Field name="time" label="Orientacny cas" component={MyDatePicker} />
          
          {/* <StyledHidenInput>
           
          </StyledHidenInput> */}
          {/* <StyledOrderField>
            <span>Orientacny cas</span>
            <DatePicker
              onChange={handleChange}
              selected={date}
              dateFormat="DD-MMM HH:mm"
              showTimeSelect
              locale="cz"
            />
          </StyledOrderField> */}
        </StyledRow>

      
        <h2>Ďakujeme</h2>
        <span>
          Veľmi pekne ďakujeme, že ste si vybrali nás, budeme sa snažiť maximálne vyhovieť. Čoskoro nás kontaktuje náš
          technik.
        </span>
        <hr />

        <Button type="submit" blue>
          Submit
        </Button>
      </form>
    </StyledFormWrapper>
  );
};
const afterSubmit = (result, dispatch) => dispatch(reset("orderForm"));
// create new, "configured" function
export default reduxForm({
  // a unique name for the form
  form: "orderForm",
  onSubmitSuccess: afterSubmit,
})(OrderForm);

// OrderForm.propTypes = {
//   handleSubmit: PropTypes.func.isRequired,
// };
