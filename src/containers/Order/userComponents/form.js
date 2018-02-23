import React from "react";
import { Field, reduxForm,reset } from "redux-form/immutable";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from "prop-types";
import { FormInput } from "../../../components/FormElements/index";
import Button from "../../../components/Button";


const OrderForm = props => {
  const { handleSubmit } = props;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Osobne informacie</h2>
        <hr />
        <div>
          <Field name="name" label="Meno" component={FormInput} type="text" />
        </div>
        <div>
          <Field name="surname" label="Priezvisko" component={FormInput} type="text" />
        </div>
        <div>
          <Field name="emailAddress" label="E-mailova adresa" component={FormInput} type="email" />
        </div>
        <div>
          <Field name="phone" label="Telefonne cislo" component={FormInput} type="text" />
        </div>
        <h2>Udaje o vozidle</h2>
        <hr />
        <div>
          <Field name="service" label="Pozadovany servisny ukon" component={FormInput} type="text" />
        </div>
        <div>
          <Field name="problem" label="Popis zavady" component={FormInput} type="text" />
        </div>
        <div>
          <Field name="brandOfCar" label="Znacka auta" component={FormInput} type="text" />
        </div>
        <div>
          <Field name="modelOfCar" label="Model auta" component={FormInput} type="text" />
        </div>
        <div>
          <Field name="yearOfMade" label="Rok vyroby" component={FormInput} type="text" />
        </div>
        <div>
          <Field name="timeForOrder" label="Orientacny cas" component={FormInput} type="text" />
        </div>
        <div>
          <DatePicker placeholderText="Click to select a date" />
        </div>
        <h2>Ďakujeme</h2>
        <span>
          Veľmi pekne ďakujeme, že ste si vybrali nás, budeme sa snažiť maximálne vyhovieť. Čoskoro nás kontaktuje náš
          technik.
        </span>
        <hr />

        <Button type="submit">Submit</Button>
      </form>
    </div>
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
